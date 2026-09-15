<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    @vite(['resources/css/app.css'])
</head>
<body class="bg-slate-900 text-white w-[1200px] h-[630px] p-16 flex flex-col justify-between font-sans">
    
    <!-- Top Section: Kategori & Brand -->
    <div class="flex items-center justify-between">
        <span class="bg-blue-600 text-white text-xl font-bold px-6 py-2 rounded-full uppercase tracking-wider">
            {{ $article->category->name ?? 'Berita' }}
        </span>
        <span class="text-slate-400 font-semibold text-2xl tracking-widest uppercase">
            Arunika Global
        </span>
    </div>

    <div class="my-auto">
        <h1 class="text-6xl font-extrabold leading-tight text-white max-w-5xl mb-6">
            {{ $article->title }}
        </h1>
        @if($article->excerpt)
            <p class="text-3xl text-slate-300 max-w-4xl line-clamp-2 leading-relaxed">
                {{ $article->excerpt }}
            </p>
        @endif
    </div>

    <div class="flex items-center justify-between border-t border-slate-700 pt-8">
        <div>
            <p class="text-slate-400 text-xl mb-1">Ditulis oleh</p>
            <p class="text-white text-3xl font-bold">
                {{ $article->author->name ?? 'Tim Arunika' }}
            </p>
        </div>
        <div class="text-right">
            <p class="text-slate-400 text-xl mb-1">Dipublikasikan</p>
            <p class="text-white text-2xl font-semibold">
                {{ $article->published_at ? \Carbon\Carbon::parse($article->published_at)->translatedFormat('d F Y') : now()->translatedFormat('d F Y') }}
            </p>
        </div>
    </div>

</body>
</html>