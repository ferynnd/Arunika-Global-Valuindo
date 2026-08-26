<!-- Swiper Logo Marquee -->
<div class="swiper w-full h-full mySwiper-marquee">
  <div class="swiper-wrapper py-10">
    <!-- ✅ List image -->
    @foreach ([
        'bankjatim.png',
        'hstaq.png',
        // 'cikal.png',
        // 'itsfc.png',
        // 'iysca.png',
        // 'osm.png',
        // 'piu.png',
        'otssa.png',
        'ptsfs.png',
        'mhgr.png',
        'oa.png',
        'op.png',
        'os.png',
        'osa.png',
        'perkemisby.png',
        'pkoumgt.png',
        'sifw.png',
        'skavola.png',
        'wbs.png'
    ] as $logo)
        <div class="swiper-slide flex justify-center items-center">
            <div class=" w-full h-40  flex justify-center items-center">
                <img src="{{ asset('assets/logo/' . $logo) }}" 
                    alt="Logo {{ pathinfo($logo, PATHINFO_FILENAME) }}" 
                    class="max-w-full max-h-full object-cover" />
            </div>
        </div>

    @endforeach
  </div>
</div>


@push('link')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"/>
@endpush

@push('js')
<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
<script>
const swiper = new Swiper(".mySwiper-marquee", {
    slidesPerView: 2, // biar width mengikuti konten
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    speed: 3000, // makin besar makin pelan, makin kecil makin cepat
    autoplay: {
        delay: 0, // langsung jalan tanpa jeda
        disableOnInteraction: false
    },
    breakpoints: {
        550: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1140: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 20,
        }
    }
});
</script>
@endpush
