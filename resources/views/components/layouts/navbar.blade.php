<!-- Header -->
<header id="main-header" class="fixed top-0 left-0 z-50 w-full transition-colors duration-500 overflow-x-hidden">
    <div class="py-3 bg-primary">
        {{-- Jangan Dihapus --}}
    </div>
    <div class="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
            <a href="">
                @php
                    $identity = \App\Models\SiteIdentity::first();
                @endphp
                @if($identity?->sitelogo)
                    <img src="{{ Storage::url($identity->sitelogo) }}" class="h-12 sm:h-14" alt="{{$identity->sitetitle}}">
                @else
                    <img src="{{ asset('assets/logo.png') }}" class="h-12 sm:h-14" alt="Logo-Web">
                @endif
            </a>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-6">
            @php
                $menus = ['Home', 'Tentang Kami', 'Produk', 'Artikel', 'Fasilitas', 'Kontak'];
            @endphp
            @foreach($menus as $menu)
                <a href="#"
                   class="relative text-white text-sm font-medium group">
                    {{ $menu }}
                    <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
            @endforeach
        </nav>

        <!-- Mobile Hamburger -->
        <button id="menu-toggle" class="md:hidden flex flex-col space-y-1.5 z-50 relative">
            <span class="w-6 h-0.5 bg-white"></span>
            <span class="w-6 h-0.5 bg-white"></span>
            <span class="w-6 h-0.5 bg-white"></span>
        </button>
    </div>

    <!-- Mobile Off-canvas Menu -->
    <div id="mobile-menu"
         class="absolute top-full right-0 h-screen w-full sm:w-2/3 bg-black/90 text-white 
                transform translate-x-full transition-transform duration-300 z-40">
        <div class="p-6 flex flex-col space-y-6">
            <button id="close-menu" class="self-end text-gray-400 hover:text-white">✕</button>
            @foreach($menus as $menu)
                <a href="#"
                   class="relative text-white text-lg font-medium group">
                    {{ $menu }}
                    <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
            @endforeach
        </div>
    </div>
</header>


@push('js')
<script>
    // Scroll effect
    document.addEventListener("scroll", function () {
        const header = document.getElementById("main-header");
        if (window.scrollY > 50) {
            header.classList.add("bg-black/70" , "backdrop-blur-md");
        } else {
            header.classList.remove("bg-black/70" , "backdrop-blur-md");
        }
    });

    // Mobile menu toggle
    const toggle = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    toggle.addEventListener("click", () => {
        mobileMenu.classList.remove("translate-x-full");
    });

    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
    });
</script>
@endpush
