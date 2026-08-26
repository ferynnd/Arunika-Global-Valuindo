<x-layouts.app>
    <!-- Progress Bar -->
    <div id="page-progress" class="fixed top-0 left-0 w-0 h-1 bg-orange-600 z-[9999] transition-[width] duration-300 ease-out"></div>

     <div class="flex min-h-screen">
        {{-- Sidebar --}}
        <x-layouts.sidebar />

        {{-- Main Content --}}
        <main class="flex-1 p-6 overflow-auto ml-64">
            {{ $slot }}
        </main>
    </div>


    @push('js')
        <script>
            function openModal(id) {
                document.getElementById(id).classList.remove('hidden');
            }

            function closeModal(id) {
                document.getElementById(id).classList.add('hidden');
            }
        </script>
        <script>
document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("page-progress");
    let width = 0;
    let interval;

    function startProgress() {
        clearInterval(interval);
        width = 0;
        progressBar.style.width = "0%";
        progressBar.classList.remove("hidden");

        interval = setInterval(() => {
            width += Math.random() * 10; // naik pelan2 random
            if (width >= 90) width = 90; // tahan di 90% dulu
            progressBar.style.width = width + "%";
        }, 150);
    }

    function finishProgress() {
        clearInterval(interval);
        progressBar.style.width = "100%";
        setTimeout(() => {
            progressBar.remove();
        }, 500);
    }

    // Jalankan ketika halaman mulai load
    startProgress();

    // Selesaikan ketika halaman selesai load
    window.addEventListener("load", finishProgress);

    // Opsional: tambahkan efek kalau klik link internal
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", e => {
            if (link.href && !link.href.startsWith("#") && !link.target) {
                startProgress();
            }
        });
    });
});
</script>

    @endpush

</x-layouts.app>


