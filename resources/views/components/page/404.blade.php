{{-- resources/views/errors/404.blade.php --}}
<x-layouts.guest>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
    
    <h1 class="text-9xl font-extrabold text-primary tracking-widest">404</h1>
    <div class="bg-primary mt-2 px-3 py-1 text-sm rotate-6 absolute">
      Page Not Found
    </div>

    <p class="mt-6 text-lg text-gray-300">Ups! Halaman yang kamu cari tidak ditemukan.</p>

    <a href="{{ url('/') }}" 
       class="mt-6 px-6 py-3 bg-primary text-white font-semibold shadow hover:bg-orange-700 transition">
      Kembali ke Beranda
    </a>
  </div>
</x-layouts.guest>
