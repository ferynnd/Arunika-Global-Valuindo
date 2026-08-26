@props(['service'])

<section class="bg-gray-100 py-14 sm:py-16 h-auto md:py-20 lg:py-24">
    <div class="w-full h-full">
        <div class="flex flex-col lg:flex-row gap-12 relative w-full h-full">
            
            <!-- Left Text Section -->
            <div class="lg:w-1/2 w-full pl-8 lg:pl-32 lg:pr-0 pr-7 lg:ps-32 ps-8">
                <div class="bg-primary text-white px-2 py-1 text-sm font-semibold inline-block mb-4">
                    LAYANAN KAMI
                </div>
                <h2 class="lg:text-6xl md:text-6xl text-5xl font-bold text-gray-900 mb-4">
                    LAYANAN TERBAIK UNTUK TUBUH
                    DAN PERFORMA MAKSIMAL
                </h2>
                <p class="text-gray-800 mb-8 leading-relaxed">
                    Dapatkan layanan terbaik dengan pendekatan holistik. Kami menggabungkan teknologi terdepan dengan metode pelatihan yang telah terbukti efektif untuk memberikan hasil terbaik bagi setiap klien.
                </p>

                <!-- Scroll Buttons (Desktop only) -->
                <div class=" gap-2 hidden lg:flex">
                    <button id="btnLeft" class="w-12 h-12 bg-gray-300 hover:bg-gray-200 flex items-center justify-center">
                        <span class="text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l14 0" />
                                <path d="M5 12l4 4" />
                                <path d="M5 12l4 -4" />
                            </svg>
                        </span>
                    </button>
                    <button id="btnRight" class="w-12 h-12 bg-primary hover:bg-orange-500 flex items-center justify-center">
                        <span class="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l14 0" />
                                <path d="M15 16l4 -4" />
                                <path d="M15 8l4 4" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <!-- Right Services Cards -->
            <div class="lg:w-1/2 w-full relative overflow-x-auto mx-auto scrollbar-hidden">
                <div id="servicesContainer" class="flex relative lg:absolute gap-4 py-2 px-2 w-max">
                    @forelse($service as $item)
                        <div class="relative h-96 w-80 flex-shrink-0 overflow-hidden shadow-md">
                            <img src="{{ Storage::url($item->thumbnail) }}" alt="{{ $item->slug }}" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black/20"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-4 bg-white m-4">
                                <h3 class="text-black font-bold text-2xl uppercase md:text-3xl">
                                    {{ \Illuminate\Support\Str::limit($item->title, 40) }}
                                </h3>
                                <div class="mt-3 w-full flex justify-end">
                                    <a href="{{ route('post.single', ['type' => postTypeToUrl($item->type), 'slug' => $item->slug]) }}"
                                        class="relative overflow-hidden px-4 py-2 font-semibold bg-primary text-white 
                                        transition-all duration-300 border-2 border-primary group">
                                        <span class="relative text-sm z-10 group-hover:text-primary transition-colors duration-300">
                                            Lihat Layanan
                                        </span>
                                        <span class="absolute inset-0 bg-white translate-x-[-100%] 
                                                    group-hover:translate-x-0 
                                                    transition-transform duration-300 ease-out"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    @empty
                        <span class="py-6 w-full text-center text-gray-500 text-sm">
                            Belum ada layanan yang dibuat.
                        </span>
                    @endforelse
                </div>
            </div>

        </div>
    </div>
</section>

@push('js')
<script>
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('servicesContainer');
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');
    const scrollAmount = 320;

    // Atur tinggi parent hanya di desktop
    function updateParentHeight() {
        const parent = container.parentElement.parentElement;
        if (window.innerWidth >= 1024) {
            parent.style.height = container.offsetHeight + 'px';
        } else {
            parent.style.height = 'auto';
        }
    }

    // Setup scroll tombol hanya untuk desktop
    function setupScrollButtons() {
        if (window.innerWidth >= 1024) {
            let currentLeft = 0;
            btnLeft.onclick = () => {
                currentLeft += scrollAmount;
                if (currentLeft > 0) currentLeft = 0;
                container.style.left = currentLeft + 'px';
            };
            btnRight.onclick = () => {
                const maxScroll = -(container.scrollWidth - container.parentElement.offsetWidth);
                currentLeft -= scrollAmount;
                if (currentLeft < maxScroll) currentLeft = maxScroll;
                container.style.left = currentLeft + 'px';
            };
        } else {
            // Reset posisi dan nonaktifkan tombol di mobile
            container.style.left = null;
            btnLeft.onclick = null;
            btnRight.onclick = null;
        }
    }

    updateParentHeight();
    setupScrollButtons();

    window.addEventListener('resize', () => {
        updateParentHeight();
        setupScrollButtons();
    });
});
</script>
@endpush
