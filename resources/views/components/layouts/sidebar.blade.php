<aside id="sidebar" class="fixed top-0 left-0 w-64 h-screen  bg-gray-900 max-h-dvh flex flex-col shadow-md transition-all duration-300 overflow-hidden">
    <!-- Logo + Toggle -->
    <div class="flex items-center justify-between px-4 py-3 border-b">
       <div id="img" class="flex items-center">
            <!-- Logo -->
            <a href="">
            @php
                $identity = \App\Models\SiteIdentity::first();
            @endphp
            @if($identity?->sitelogo)
                <img src="{{ Storage::url($identity->sitelogo) }}" class="h-10 sm:h-10" alt="{{$identity->sitetitle}}">
            @else
                <img src="{{ asset('assets/logo.png') }}" class="h-10 sm:h-10" alt="Logo-Web">
            @endif
            </a>
        </div>
        <button id="toggleSidebar" class="p-2 rounded-lg">
            <i class="fas fa-bars text-gray-300 hover:text-primary text-lg"></i>
        </button>
    </div>

    <!-- Menu -->
    <nav class="flex-1 px-3 py-4 space-y-2">
        <a href="{{route('dashboard')}}" class="flex items-center gap-3 p-2 rounded-lg text-gray-200 hover:bg-primary transition">
            <i class="fas fa-border-all w-6 text-gray-400"></i>
            <span class="menu-text">Dashboard</span>
        </a>
        @role('superadmin')
        <a href="{{route('users.index')}}" class="flex items-center gap-3 p-2 rounded-lg text-gray-200 hover:bg-primary transition">
            <i class="fas fa-users w-6 text-gray-400"></i>
            <span class="menu-text">User</span>
        </a>
        @endrole
        <a href="{{route('product.index')}}" class="flex items-center gap-3 p-2 rounded-lg text-gray-200 hover:bg-primary transition">
            <i class="fas fa-box-open w-6 text-gray-400"></i>
            <span class="menu-text">Produk</span>
        </a>

        <div class="article-menu">
            <!-- Parent Link (Toggle Button) -->
            <button type="button"
                class="flex items-center justify-between w-full p-2 rounded-lg text-gray-200 hover:bg-primary transition"
                onclick="toggleSubmenu('article-submenu', this)">
                <div class="flex items-center gap-3">
                    <i class="fas fa-newspaper w-6 text-gray-400"></i>
                    <span class="menu-text">Artikel</span>
                </div>
                <!-- Chevron Icon -->
                <svg class="w-4 h-4 text-gray-400 transform transition-transform" fill="none"
                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <!-- Submenu -->
            <div id="article-submenu" class="hidden ml-6 mt-2 space-y-1">
                <a href="{{ route('article.index') }}"
                    class="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:bg-gray-700 transition">
                    <i class="fas fa-list w-5 text-gray-400"></i>
                    <span>List Artikel</span>
                </a>

                <a href="{{ route('article.category.index') }}"
                    class="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:bg-gray-700 transition">
                    <i class="fas fa-star w-5 text-gray-400"></i>
                    <span>List Kategori</span>
                </a>
            </div>
        </div>

        <div class="site-settings-menu">
            <!-- Parent Link (Toggle Button) -->
            <button type="button"
                class="flex items-center justify-between w-full p-2 rounded-lg text-gray-200 hover:bg-primary transition"
                onclick="toggleSubmenu('site-settings-submenu', this)">
                <div class="flex items-center gap-3">
                    <i class="fas fa-cogs w-6 text-gray-400"></i>
                    <span class="menu-text">Pengaturan</span>
                </div>
                <!-- Chevron Icon -->
                <svg class="w-4 h-4 text-gray-400 transform transition-transform" fill="none"
                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <!-- Submenu -->
            <div id="site-settings-submenu" class="hidden ml-6 mt-2 space-y-1">
                <a href="{{route('swiper.index')}}"
                    class="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:bg-gray-700 transition">
                    <i class="fas fa-sliders-h w-5 text-gray-400"></i>
                    <span>Home Swiper</span>
                </a>

                <a href="{{ route('site.index') }}"
                    class="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:bg-gray-700 transition">
                    <i class="fas fa-id-badge w-5 text-gray-400"></i>
                    <span>Identitas Situs</span>
                </a>
            </div>
        </div>

    </nav>

    <!-- Logout -->
    <div class="px-3 py-4">
        <form id="logout-form" method="POST" action="{{ route('logout') }}">
            @csrf
            <button type="button" 
                id="logout-button"
                class="w-full flex items-center justify-center gap-3 p-2 rounded-lg text-white bg-red-500/40 hover:bg-red-500/70 transition">
                <i class="fas fa-sign-out-alt w-6"></i>
                <span class="menu-text">Logout</span>
            </button>
        </form>
    </div>


</aside>



@push('js')
<script>
document.getElementById('toggleSidebar').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  const menuTexts = sidebar.querySelectorAll('.menu-text');
  const img = document.getElementById('img');

  if (sidebar.classList.contains('w-64')) {
    sidebar.classList.remove('w-64');
    sidebar.classList.add('w-20');
    img.classList.add('hidden')
    menuTexts.forEach(el => el.classList.add('hidden'));
  } else {
    sidebar.classList.remove('w-20');
    sidebar.classList.add('w-64');
    img.classList.remove('hidden')
    menuTexts.forEach(el => el.classList.remove('hidden'));
  }
});
</script>
<script>
    function toggleSubmenu(id, btn) {
        const submenu = document.getElementById(id);
        submenu.classList.toggle("hidden");

        // Putar icon chevron
        const icon = btn.querySelector("svg");
        icon.classList.toggle("rotate-90");
    }
</script>
<script>
document.getElementById('logout-button').addEventListener('click', function (e) {
    Swal.fire({
        title: 'Yakin ingin logout?',
        text: "Kamu akan keluar dari sesi ini.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444', // merah
        cancelButtonColor: '#6b7280',  // abu-abu
        confirmButtonText: 'Ya, Logout',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById('logout-form').submit();
        }
    })
});
</script>
@endpush
