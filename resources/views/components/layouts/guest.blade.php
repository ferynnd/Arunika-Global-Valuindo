<x-layouts.app>
    {{-- Navbar --}}
    <header id="main-header" class="fixed top-0 left-0 z-30 w-full transition-colors duration-500 overflow-x-hidden">
        <div class="py-3 bg-primary">
            {{-- Jangan Dihapus --}}
        </div>
        <div class="w-full container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
            <!-- Logo -->
            <div class="flex items-center">
                <a href="{{route('home')}}">
                        @php
                            $identity = \App\Models\SiteIdentity::first();
                        @endphp
                        @if($identity?->sitelogo)
                            <img src="{{ Storage::url($identity->sitelogo) }}"  class="h-12 sm:h-14" alt="{{$identity->sitetitle}}">
                        @else
                            <img src="{{ asset('assets/logo.png') }}"  class="h-12 sm:h-14" alt="Logo-Web">
                        @endif
                </a>
            </div>

    @php
        $menus = [
            'home' => 'Home',
            'about' => 'Tentang Kami',
            'product' => 'Produk',
            'article.page' => 'Artikel',
            'contact' => 'Kontak',
        ];
    @endphp

        <nav class="hidden lg:flex space-x-6 ">
            @foreach($menus as $route => $label)
                    <a href="{{ route($route) }}"
                    class="relative text-white text-sm font-medium group">
                        {{ $label }}
                        <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
            @endforeach
        </nav>

         <!-- Mobile Hamburger -->
            <button id="menu-toggle" class="lg:hidden flex flex-col justify-center items-center space-y-1.5 z-50 relative cursor-pointer transition-all duration-300">
                <span class="line w-6 h-0.5 bg-white transition-all duration-300"></span>
                <span class="line w-6 h-0.5 bg-white transition-all duration-300"></span>
                <span class="line w-6 h-0.5 bg-white transition-all duration-300"></span>
            </button>

        </div>

            <!-- Mobile Off-canvas Menu -->
            <div id="mobile-menu"
                class="fixed top-24 left-0 w-full sm:w-2/3 hidden
                        transform -translate-y-full transition-transform duration-300 z-40">
                <div class="p-6 flex flex-col space-y-6 bg-gray-200">
                    @foreach($menus as $route => $label)
                        <a href="{{ route($route) }}"
                        class="relative text-gray-800 text-sm hover:text-primary font-medium group">
                            {{ $label }}
                        </a>
                    @endforeach
                </div>
            </div>

    </header>

    <main class=" z-0">
        {{ $slot }}
    </main>

    {{-- Footer --}}
    <x-layouts.footer />

    <button id="toTopBtn"
        class="fixed bottom-6 left-6 z-50 
                w-12 h-12 flex items-center justify-center
                bg-cyan-700 text-white rounded-full shadow-lg 
                opacity-0 pointer-events-none transform translate-y-6
                hover:bg-cyan-600 transition-all duration-500 ease-in-out">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M16 9l-4 -4" /><path d="M8 9l4 -4" /></svg>
        </button>


    
@push('js')
<script>
const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById("main-header");


toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");

    if (toggle.classList.contains("active")) {
        mobileMenu.classList.remove("hidden", "-translate-y-full");
        mobileMenu.classList.add("translate-y-0");

        // Cegah scroll di mobile dengan posisi fixed
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        header.classList.add("bg-black")
    } else {
        mobileMenu.classList.remove("translate-y-0");
        mobileMenu.classList.add("-translate-y-full");
        mobileMenu.classList.add("hidden")

        // Restore scroll
        const scrollY = -parseInt(document.body.style.top || '0');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        header.classList.remove("bg-black")
        window.scrollTo(0, scrollY);
    }
});


document.addEventListener("scroll", function () {
        // const header = document.getElementById("main-header");
        
        if (window.scrollY > 50) {
            header.classList.add("bg-black/70" , "backdrop-blur-md");
        } else {
            header.classList.remove("bg-black/70" , "backdrop-blur-md");
        }
    });

</script>


<script>
  const btn = document.getElementById("toTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btn.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
      btn.classList.remove("opacity-0", "translate-y-6", "pointer-events-none");
    } else {
      btn.classList.add("opacity-0", "translate-y-6", "pointer-events-none");
      btn.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
    }
  });

  // Scroll ke atas smooth
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
</script>

@endpush

</x-layouts.app>
