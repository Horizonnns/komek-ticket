<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Komek By Ticket - @yield('title')</title>

    @vite(['resources/css/app.scss', 'resources/js/app.ts'])
</head>

<body>
    <div id="app">
        <x-header />

        <main>
            @yield('content')
        </main>

        <x-footer />
    </div>
</body>
</html>
