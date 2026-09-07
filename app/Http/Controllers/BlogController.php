<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ArticleCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::with(['category', 'author'])
            ->where('status', 'published')
            ->latest('published_at');

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%");
            });
        }

        if ($categorySlug = $request->input('category')) {
            $query->whereHas('category', function ($q) use ($categorySlug) {
                $q->where('slug', $categorySlug);
            });
        }

        $featuredArticle = null;
        if (!$request->input('search') && !$request->input('category') && !$request->input('page')) {
            $featuredArticle = (clone $query)->first();
        }

        $articles = $query->paginate(9)->withQueryString();
        $categories = ArticleCategory::withCount(['articles' => function ($q) {
            $q->where('status', 'published');
        }])->get();

        return Inertia::render('Blog/Index', [
            'articles' => $articles,
            'featuredArticle' => $featuredArticle,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category']),
        ]);
    }

    public function show($slug)
    {
        $article = Article::with(['category', 'author'])
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        // Increment view count
        $article->increment('views');

        $relatedArticles = Article::with('category')
            ->where('status', 'published')
            ->where('id', '!=', $article->id)
            ->when($article->category_id, function ($q) use ($article) {
                $q->where('category_id', $article->category_id);
            })
            ->latest('published_at')
            ->take(3)
            ->get();

        // If not enough related by category, get latest articles
        if ($relatedArticles->count() < 3) {
            $additional = Article::with('category')
                ->where('status', 'published')
                ->where('id', '!=', $article->id)
                ->whereNotIn('id', $relatedArticles->pluck('id'))
                ->latest('published_at')
                ->take(3 - $relatedArticles->count())
                ->get();
            $relatedArticles = $relatedArticles->concat($additional);
        }

        return Inertia::render('Blog/Show', [
            'article' => $article,
            'relatedArticles' => $relatedArticles,
        ]);
    }
}
