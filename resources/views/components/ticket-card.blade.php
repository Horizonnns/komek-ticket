@props(['ticket'])

<div class="ticket-card">
    <div class="ticket-poster">
        <img src="{{ asset('images/' . $ticket['poster']) }}" alt="{{ $ticket['title'] }}">
        @if($ticket['premiere'])
            <span class="ticket-badge">Премьера</span>
        @endif
    </div>

    <h3 class="ticket-title">{{ $ticket['title'] }}</h3>
    <div class="genre-container">
        <span class="ticket-genre">{{ $ticket['genre'] }}</span>
    </div>

    <div class="ticket-sessions">
        @isset($ticket['places'])
            @foreach($ticket['places'] as $place)
                <div class="session-item">
                    <div class="session-box">
                        <span class="time">{{ $place['time'] }}</span>
                        <div class="info">
                            <span>{{ $place['type'] }}</span>
                            <span>{{ $place['price'] }} ₸</span>
                        </div>
                    </div>
                    <span class="hall">Зал {{ $place['hall'] }}</span>
                </div>
            @endforeach
        @endisset
    </div>
</div>
