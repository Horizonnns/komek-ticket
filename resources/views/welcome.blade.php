@extends('layouts.app')

@section('title', 'Главная')

@section('content')
<section class="tickets">
    <div class="container">
        <h1>Продажа билетов</h1>
        <div class="ticket-grid">
            {{-- Перебираем наш массив из контроллера --}}
            @foreach($tickets as $ticket)
                <div class="ticket-card">
                    <img src="{{ asset('images/' . $ticket['image']) }}" alt="">
                    <h3>{{ $ticket['title'] }}</h3>
                    <p>Цена: {{ $ticket['price'] }} ₸</p>
                    <button class="btn">Купить</button>
                </div>
            @endforeach
        </div>
    </div>
</section>
@endsection
