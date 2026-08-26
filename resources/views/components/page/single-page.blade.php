{{-- SEO Meta --}}
@section('title', $post->title . ' | Olympus Training Surabaya')
@section('meta_title', '')
@section('meta_description', '')
@section('meta_keywords', '')

<x-layouts.guest>

    @php
            function postTypeTitle($type) {
                return match($type) {
                    1 => 'PRODUK',
                    2 => 'LAYANAN',
                    3 => 'PELATIH',
                    default => 'DETAIL INFORMASI'
                };
            }
        @endphp
  <div class="bg-white">

    <!-- Hero Section -->
    <section class="relative z-10 bg-gray-900 text-white pb-20 pt-32">
      <div class="absolute inset-0">
        <img src="{{ $post->thumbnail ? asset('storage/'.$post->thumbnail) : asset('assets/intro.jpg') }}" alt="About Background" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/70"></div>
      </div>
      <div class="relative container mx-auto px-6 text-center">
        <x-layouts.breadcumb />
      </div>
    </section>

    <!-- Artikel Content -->
    <section class="container mx-auto px-4 py-12 max-w-4xl">

      @if($post->type != 3)
      <!-- Featured Image -->
      <div>
        <img src="{{ $post->thumbnail ? asset('storage/'.$post->thumbnail) : asset('assets/wcu.jpg') }}"
             alt="{{ $post->slug }}"
             class="w-full h-[420px] object-cover shadow-sm">
      </div>
      @endif

      <h1 class="text-3xl my-7 md:text-5xl text-gray-800 font-extrabold mt-6">{{ $post->title }}</h1>

      <!-- Post Details -->
      <div class="border-b-2 border-primary/40 pb-4 mb-8 flex flex-col md:flex-row posts-start md:posts-center justify-between gap-4">
        <h2 class="text-2xl font-semibold py-2 px-4 bg-primary text-white">{{ postTypeTitle($post->type) }}</h2>
        <div class="flex posts-center space-x-3 text-sm text-gray-600">
          <div>
            <span class="text-gray-500">
              {{ $post->published_at ? $post->published_at->diffForHumans() : $post->created_at->diffForHumans() }}
            </span>
          </div>
        </div>
      </div>

      <!-- post Body -->
      <div class="prose max-w-none text-gray-700 pb-40">
          {!! $post->content !!}
      </div>

    </section>

  </div>
</x-layouts.guest>
