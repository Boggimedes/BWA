<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

<title>BWA Designs</title>
<meta name="google-site-verification" content="zTT-sJpB8dTYK4LifgfbXEjwjsy9IpO1MzKqpGTfVXg" />
<meta name="description" content="If techology was a person, we'd totally be going steady.  We are a small group of coders and designers and would love to work with you on your next project." />
<meta name="keywords" content="web design, graphic design, php, html, css, portland, oregon, coding, website design, bwa, awesome, because we're awesome" />

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body style="overflow-x: hidden;">
<div id="root">
    @yield('content')
</div>

<!-- Scripts -->
<script src="//cdn.wordart.com/wordart.min.js" async defer></script>
<script src="{{mix('/js/manifest.js')}}"></script>
<script src="{{mix('/js/vendor.js')}}"></script>
<script src="{{mix('/js/app.js')}}"></script>
</body>
</html>
