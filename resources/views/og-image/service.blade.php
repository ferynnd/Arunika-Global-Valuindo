<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    @vite(['resources/css/app.css'])
</head>
<body className="bg-primary text-white w-[1200px] h-[630px] p-16 flex flex-col justify-between font-sans">
    
    <!-- Top Section: Brand/Logo -->
    <div className="flex items-center justify-between">
        <span className="text-secondary font-bold text-2xl uppercase tracking-widest">
            Arunika Global Valuindo
        </span>
        <span className="bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/20">
            Layanan Korporasi
        </span>
    </div>

    <div className="space-y-4 my-auto">
        <h1 className="text-5xl font-extrabold leading-tight text-white max-w-5xl">
            {{ $service->title }}
        </h1>
        @if($service->excerpt)
            <p className="text-xl text-slate-200 max-w-4xl line-clamp-2 leading-relaxed">
                {{ $service->excerpt }}
            </p>
        @endif
    </div>

    <div className="flex items-center justify-between border-t border-white/20 pt-6">
        <span className="text-sm text-slate-300">
            arunikaglobal.com
        </span>
        <div className="text-secondary font-bold text-sm">
            Solusi & Konsultasi Terpercaya
        </div>
    </div>

</body>
</html>