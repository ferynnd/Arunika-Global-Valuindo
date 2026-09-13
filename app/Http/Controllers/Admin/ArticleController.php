<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\ArticleCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::with(['category', 'author'])
            ->latest();

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }

        if ($category = $request->input('category_id')) {
            $query->where('category_id', $category);
        }

        if ($status = $request->input('status')) {
            $query->where('status', $status);
        }

        $articles = $query->paginate(10)->withQueryString();
        $categories = ArticleCategory::select('id', 'name')->get();

        return Inertia::render('Admin/Articles/Index', [
            'articles' => $articles,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category_id', 'status']),
        ]);
    }

    public function create()
    {
        $categories = ArticleCategory::all();

        return Inertia::render('Admin/Articles/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'category_id' => ['nullable', 'exists:article_categories,id'],
            'new_category' => ['nullable', 'string', 'max:255'], // Validasi kategori baru
            'excerpt' => ['nullable', 'string', 'max:500'],
            'content' => ['nullable', 'string'],
            'status' => ['required', 'in:draft,published,archived'],
            'thumbnail' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'meta_title' => ['nullable', 'string', 'max:60'],
            'meta_description' => ['nullable', 'string', 'max:160'],
            'meta_keywords' => ['nullable', 'string', 'max:255'],
        ]);

        // Logika Kategori: Jika user mengetik kategori baru
        $categoryId = $validated['category_id'] ?? null;
        if (!empty($validated['new_category'])) {
            $newCategory = ArticleCategory::firstOrCreate(
                ['name' => trim($validated['new_category'])],
                ['slug' => Str::slug($validated['new_category'])]
            );
            $categoryId = $newCategory->id;
        }

        $slug = Str::slug($validated['title']) . '-' . Str::random(5);
        $thumbnailPath = null;

        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')->store('articles', 'public');
        }

        $publishedAt = null;
        if ($validated['status'] === 'published') {
            $publishedAt = now();
        }

        Article::create([
            'title' => $validated['title'],
            'slug' => $slug,
            'category_id' => $categoryId,
            'excerpt' => $validated['excerpt'] ?? null,
            'content' => $validated['content'] ?? null,
            'status' => $validated['status'],
            'thumbnail' => $thumbnailPath,
            'author_id' => $request->user()->id,
            'published_at' => $publishedAt,
            'meta_title' => $validated['meta_title'] ?? null,
            'meta_description' => $validated['meta_description'] ?? null,
            'meta_keywords' => $validated['meta_keywords'] ?? null,
        ]);

        return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil dibuat!');
    }

    public function show(Article $article)
    {
        $article->load(['category', 'author']);

        return Inertia::render('Admin/Articles/Show', [
            'article' => $article,
        ]);
    }

    public function edit(Article $article)
    {
        $categories = ArticleCategory::all();

        return Inertia::render('Admin/Articles/Edit', [
            'article' => $article,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'category_id' => ['nullable', 'exists:article_categories,id'],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'content' => ['nullable', 'string'],
            'status' => ['required', 'in:draft,published,archived'],
            'thumbnail' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'meta_title' => ['nullable', 'string', 'max:60'],
            'meta_description' => ['nullable', 'string', 'max:160'],
            'meta_keywords' => ['nullable', 'string', 'max:255'],
        ]);

        $data = [
            'title' => $validated['title'],
            'category_id' => $validated['category_id'] ?? null,
            'excerpt' => $validated['excerpt'] ?? null,
            'content' => $validated['content'] ?? null,
            'status' => $validated['status'],
            'meta_title' => $validated['meta_title'] ?? null,
            'meta_description' => $validated['meta_description'] ?? null,
            'meta_keywords' => $validated['meta_keywords'] ?? null,
        ];

        // Logika tanggal publikasi (Isi tanggal jika baru pertama kali dipublikasikan)
        if ($validated['status'] === 'published') {
            if (!$article->published_at) {
                $data['published_at'] = now();
            }
        } else {
            // Opsional: Kosongkan published_at jika status diubah kembali menjadi draft/archived
            // $data['published_at'] = null; 
        }

        // Handle Upload Thumbnail Baru & Hapus File Lama
        if ($request->hasFile('thumbnail')) {
            if ($article->thumbnail && Storage::disk('public')->exists($article->thumbnail)) {
                Storage::disk('public')->delete($article->thumbnail);
            }
            $data['thumbnail'] = $request->file('thumbnail')->store('articles', 'public');
        }

        $article->update($data);

        return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil diperbarui!');
    }

    public function destroy(Article $article)
    {
        // Hapus file thumbnail fisik dari storage agar tidak menjadi sampah server
        if ($article->thumbnail && Storage::disk('public')->exists($article->thumbnail)) {
            Storage::disk('public')->delete($article->thumbnail);
        }

        $article->delete();

        return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil dihapus!');
    }
}