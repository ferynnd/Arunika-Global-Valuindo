<!-- Footer -->
<footer class="bg-black text-white pb-12 pt-50 relative">

    @php
        $identity = \App\Models\SiteIdentity::first();
    @endphp
      <div class="absolute -top-36 left-1/2 -translate-x-1/2 lg:w-[85%] w-full">
            <section class="container py-10 bg-primary w-full px-6 sm:px-8 lg:px-12 shadow-lg">
                <div class="flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left">
                
                <!-- Text -->
                <div class="lg:w-2/3 mb-6 lg:mb-0">
                    <div class="bg-gray-900 text-white px-2 py-1 text-sm font-semibold inline-block mb-4">
                    HUBUNGI KAMI
                    </div>
                    <h2 class="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-thing">
                    SIAP MEMULAI PERJALANAN<br>
                    SEHATMU?
                    </h2>
                </div>

                <!-- Button -->
                <div class="lg:w-1/3 flex justify-center lg:justify-end">
                    @php
                        $phone = $identity->wa ?? '6281217341180';
                        $message = 'Haloo, olympustrainingsby.com  ';
                    @endphp
                    <a href="https://wa.me/{{ $phone }}?text={{ urlencode($message) }}" target="_blank" rel="noopener noreferrer"
                    class="relative overflow-hidden px-6 py-4 font-semibold 
                            bg-white text-primary transition-all duration-300 border-2 border-white group">
                    <span
                        class="relative text-lg uppercase z-10 gap-2 flex group-hover:text-white transition-colors duration-300">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                        Chat WhatsApp
                    </span>
                    <!-- Overlay putih yang slide -->
                    <span
                        class="absolute inset-0 bg-primary -translate-x-full 
                            group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    </a>
                </div>
                </div>
            </section>
        </div>


  <div class="container mx-auto px-6 lg:pt-0 pt-20">
    <div class="flex flex-col md:flex-row justify-between gap-12">

      <!-- Kiri -->
      <div class="md:w-1/2">
        <div class="flex items-center mb-4">
          <a href="{{route('home')}}">
            @if($identity?->sitelogo)
                <img src="{{ Storage::url($identity->sitelogo) }}"  class="h-16 sm:h-20" alt="{{$identity->sitetitle}}">
            @else
                <img src="{{ asset('assets/logo.png') }}"  class="h-16 sm:h-20" alt="Logo-Web">
            @endif
          </a>
        </div>
        <p class="text-gray-400 w-4/5 mb-6 leading-relaxed">
          Di Olympus Training Lab, kami membantu Anda bergerak lebih baik, lebih kuat, dan bebas nyeri dengan metode 
          Corrective Exercise & Functional Training berbasis NASM.
        </p>
      </div>

      <!-- Kanan -->
      <div class="md:w-1/2 grid grid-cols-2 gap-8">
        
        <!-- Menu -->
        <div>
          <h3 class="text-white font-semibold text-xl mb-4">Menu</h3>
          <ul class="space-y-2">
            <li><a href="{{route('home')}}" class="text-gray-400 hover:text-primary">Home</a></li>
            <li><a href="{{route('aboutus')}}" class="text-gray-400 hover:text-primary">Tentang Kami</a></li>
            <li><a href="{{route('trainer')}}" class="text-gray-400 hover:text-primary">Profil Pelatih</a></li>
            <li><a href="{{route('article.page')}}" class="text-gray-400 hover:text-primary">Artikel</a></li>
            <li><a href="{{route('contact')}}" class="text-gray-400 hover:text-primary">Kontak</a></li>
          </ul>
        </div>

        <!-- Kontak -->
        <div>
          <h3 class="text-white font-semibold text-xl mb-4">Kontak</h3>
            <ul class="space-y-2 text-gray-400">
                <li class="flex items-center space-x-3">
                    <i class="fa-brands fa-youtube text-primary"></i>
                    <span>olympustrainingsby</span>
                </li>
                <li class="flex items-center space-x-3">
                    <i class="fas fa-envelope text-primary"></i>
                    <span>{{$identity->email ?? "-"}}</span>
                </li>
                <li class="flex items-center space-x-3">
                    <i class="fab fa-instagram text-primary"></i>
                    <span>{{$identity->instagram ?? "-"}}</span>
                </li>
                <li class="flex justify-start space-x-3">
                    <i class="fas fa-map-marker-alt mt-1 text-primary"></i>
                    <span>Taman Wisata Regency No.H-39, Kabupaten Gresik, Jawa Timur 61177</span>
                </li>
            </ul>

        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-800 mt-12 pt-6 text-center">
      <p class="text-gray-400 text-sm">
        Copyright © 2025 OTS PT Suyoko Fit Sejahtera - Powered by <a href="https://instagram.com/ferynnd" class="hover:underline hover:font-semibold hover:text-primary">Ferynnd</a> 

      </p>
    </div>
  </div>
</footer>
