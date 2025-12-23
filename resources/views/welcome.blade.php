@extends('layouts.app')

@section('title', 'Главная')

@section('content')
<section class="tickets">
    <div class="container">
        <h1 class="tickets-title">Продажа билетов</h1>

        <div class="ticket-grid">
            @foreach($tickets as $ticket)
                <div class="ticket-card">

                    {{-- poster --}}
                    <div class="ticket-poster">
                        <img
                            src="{{ asset('images/' . $ticket['poster']) }}"
                            alt="{{ $ticket['title'] }}">

                        {{-- Премьера --}}
                        @if(!empty($ticket['premiere']))
                            <span class="ticket-badge">Премьера</span>
                        @endif
                    </div>

                    {{-- info --}}
                    <div class="ticket-info">
                        <h3 class="ticket-title">{{ $ticket['title'] }}</h3>
                        <p class="ticket-genre">{{ $ticket['genre'] }}</p>

                        {{-- sessions --}}
                        @if(!empty($ticket['places']))
                            <div class="ticket-sessions">
                                @foreach($ticket['places'] as $place)
                                    <div class="session">
                                        <span class="session-time">{{ $place['time'] }}</span>
                                        <span class="session-type">{{ $place['type'] }}</span>
                                        <span class="session-hall">Зал {{ $place['hall'] }}</span>
                                        <span class="session-price">{{ $place['price'] }} ₸</span>
                                    </div>
                                @endforeach
                            </div>

                        {{-- no sessions --}}
                        @else
                            <p class="ticket-no-sessions">
                                {{ $ticket['sessions'] ?? 'Сеансы уточняются' }}
                            </p>
                        @endif
                    </div>


                    <button class="btn ticket-btn">Купить билет</button>

                </div>
            @endforeach
        </div>
    </div>
</section>
@endsection
