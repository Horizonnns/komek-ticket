@props(['ticket'])

<div class="ticket-card">
    <div class="ticket-poster">
        <img src="{{ asset('images/' . $ticket['poster']) }}" alt="{{ $ticket['title'] }}">

        @if(!empty($ticket['premiere']))
            <span class="ticket-badge">Премьера</span>
        @endif
    </div>

    <div class="ticket-info">
        <h3 class="ticket-title">{{ $ticket['title'] }}</h3>
        <p class="ticket-genre">{{ $ticket['genre'] }}</p>

        @if(!empty($ticket['places']))
            <div class="ticket-sessions">
                @foreach($ticket['places'] as $place)
                    <div class="session">
                        <span class="session-time">{{ $place['time'] }}</span>
                        <div class="session-details">
                            <span class="session-hall">Зал {{ $place['hall'] }}</span>
                            <span class="session-price">{{ $place['price'] }} ₸</span>
                        </div>
                    </div>
                @endforeach
            </div>
        @else
            <p class="ticket-no-sessions">
                {{ $ticket['sessions'] ?? 'Сеансы уточняются' }}
            </p>
        @endif
    </div>

    <button class="btn ticket-btn">Купить билет</button>
</div>
