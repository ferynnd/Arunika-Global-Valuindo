{{-- SEO Meta --}}
@section('title', $article->title . ' | Olympus Training Surabaya')
@section('meta_description', Str::limit(strip_tags($article->excerpt ?? $article->content), 150))
@section('meta_keywords', implode(',', $article->tags ?? ['artikel', 'olympus', 'fitness', 'training']))

<x-layouts.guest>
  <div class="bg-white">

    <!-- Hero Section -->
    <section class="relative z-10 bg-gray-900 text-white pb-20 pt-32">
      <div class="absolute inset-0">
        <img src="{{ $article->thumbnail ? asset('storage/'.$article->thumbnail) : asset('assets/intro.jpg') }}" alt="About Background" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/70"></div>
      </div>
      <div class="relative container mx-auto px-6 text-center">
        <x-layouts.breadcumb />
        <h1 class="text-3xl md:text-5xl font-extrabold mt-6">{{ $article->title }}</h1>
        <p class="mt-3 text-sm md:text-base text-gray-300">
          Dipublikasikan {{ $article->published_at ? $article->published_at->diffForHumans() : $article->created_at->diffForHumans() }}
          oleh <span class="font-semibold text-white">{{ $article->author->name }}</span>
        </p>
      </div>
    </section>

    <!-- Artikel Content -->
    <section class="container mx-auto px-4 py-12 max-w-4xl">

      <!-- Excerpt -->
      @if($article->excerpt)
        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
          {{ $article->excerpt }}
        </p>
      @endif

      <!-- Featured Image -->
      <div class="mb-10">
        <img src="{{ $article->thumbnail ? asset('storage/'.$article->thumbnail) : asset('assets/hero.jpg') }}"
             alt="{{ $article->slug }}"
             class="w-full h-[420px] object-cover shadow-sm">
      </div>

      <!-- Post Details -->
      <div class="border-b-2 border-primary/40 pb-4 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h2 class="text-xl font-semibold text-gray-800">Detail Artikel <span class="px-2 py-1 bg-primary text-white"> {{ $article->category->name }} </span></h2>
        <div class="flex items-center space-x-3 text-sm text-gray-600">
          <div>
            <p class="font-medium text-gray-800">{{ $article->author->name }}</p>
            <span class="text-gray-500">
              {{ $article->published_at ? $article->published_at->diffForHumans() : $article->created_at->diffForHumans() }}
            </span>
          </div>
        </div>
      </div>

      <!-- Article Body -->
      <article class="prose max-w-none text-gray-700  {{ $relatedArticles->isEmpty() ? 'pb-40' : '' }}">
          {!! $article->content !!}
      </article>

    </section>

    @if($relatedArticles->count())
    <!-- Artikel Terkait -->
    <section class="bg-gray-50 pt-12 pb-52">
      <div class="container mx-auto px-4 max-w-6xl">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Artikel Terkait
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          @foreach($relatedArticles as $related)
            <a href="{{ route('article.single', $related->slug) }}" class="relative group overflow-hidden shadow-lg bg-gray-900">
              <!-- Image -->
              <img src="{{ $related->thumbnail ? asset('storage/'.$related->thumbnail) : asset('assets/default-article.jpg') }}"
                   alt="{{ $related->slug }}"
                   class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110">

              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>

              <!-- Content -->
              <div class="absolute bottom-0 p-5 text-white">
                <span class="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 mb-3 rounded">
                  {{ $related->published_at ? $related->published_at->diffForHumans() : $related->created_at->diffForHumans() }}
                </span>
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {{ $related->title }}
                </h3>
                @if($related->excerpt)
                  <p class="text-sm text-gray-300 mb-3 line-clamp-2">
                    {{ $related->excerpt }}
                  </p>
                @endif
                <span class="inline-block text-primary font-semibold text-sm hover:underline group-hover:text-white transition-colors">
                  Baca Selengkapnya →
                </span>
              </div>
            </a>
          @endforeach
        </div>
      </div>
    </section>
    @endif

  </div>
</x-layouts.guest>
