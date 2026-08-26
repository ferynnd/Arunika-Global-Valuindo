@props(['swipper'])


{{-- resources/views/components/layouts/swipper.blade.php --}}
<div class="absolute inset-0 z-0">
    <!-- Swiper -->
    <div class="swiper mySwiper-hero absolute w-full h-full">
        <div class="swiper-wrapper">
            @forelse ($swipper as $item)
                <div class="swiper-slide">
                    <img src="{{ Storage::url($item->imageswipper) }}" 
                         alt="{{ $item->titleswipper }}" 
                         class="w-full h-full object-cover">
                </div>
            @empty
                <div class="swiper-slide">
                    <img src="{{ asset('assets/hero.png') }}" 
                         alt="Default Hero" 
                         class="w-full h-full object-cover">
                </div>
            @endforelse
        </div>
    </div>

    <!-- Overlay gelap -->
    <div class="absolute inset-0 bg-black/70 z-10"></div>
</div>

@push('link')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"/>
@endpush

@push('js')
<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
<script>
new Swiper(".mySwiper-hero", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
</script>
@endpush
