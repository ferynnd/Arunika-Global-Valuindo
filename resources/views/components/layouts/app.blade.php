@php
    $identity = \App\Models\SiteIdentity::first();
    $siteTitle = $identity?->sitetitle ?? 'Olympus Training Surabaya';
    $siteTagline = $identity?->sitetagline ?? 'Official Website';
@endphp


<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

     <title>
        @hasSection('title')
            @yield('title') | {{ $siteTitle }}
        @else
            {{ $siteTitle }} | {{ $siteTagline }}
        @endif
    </title>

    <meta name="description" content="@yield('meta_description')">
    <meta name="keywords" content="@yield('meta_keywords')">
    <meta property="og:title" content="@yield('title')" />
    <meta property="og:description" content="@yield('meta_description')" />
    <meta property="og:type" content="website" />

    <!-- Favicon -->
    @if($identity?->sitefavicon)
        <link rel="icon" type="image/png" href="{{ Storage::url($identity->sitefavicon) }}">
    @else
        <link rel="icon" type="image/png" href="{{ asset('assets/logo.png') }}">
    @endif

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Tempat untuk meta SEO -->
    @stack('meta')

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    @stack('link')

    <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.8/dist/trix.css">

</head>
<body class="antialiased font-nunito @stack('body.custom')">

    @include('sweetalert::alert')
    {{-- Tempat untuk konten utama --}}
    <div class="min-h-screen">
        {{ $slot }}
    </div>

    @stack('js')
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script type="text/javascript" src="https://unpkg.com/trix@2.0.8/dist/trix.umd.min.js"></script>
</body>
</html>
