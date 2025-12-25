<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Komek By Ticket - @yield('title')</title>

  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#e92b43">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Komek Ticket">
  <link rel="apple-touch-icon" href="/images/icons/icon-192.png">

  @vite(['resources/css/app.scss', 'resources/js/app.ts'])
</head>

<body>
  <div id="app">
    <x-header />

    <main>
      @yield('content')
    </main>

    <x-booking-modal />
    <x-tickets-modal />
    <x-payment-modal />

    <x-footer />
  </div>
</body>

</html>
