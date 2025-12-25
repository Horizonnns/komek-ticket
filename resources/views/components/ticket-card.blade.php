@props(['ticket'])

<div class="ticket-card"
  data-dates="{{ implode(',', $ticket['show_dates'] ?? []) }}">
  <div class="ticket-poster">
    <img src="{{ asset('images/' . $ticket['poster']) }}" alt="{{ $ticket['title'] }}">

    <div class="badge-container">
      @if(isset($ticket['age_rating']))
      <span class="age-badge">{{ $ticket['age_rating'] }}</span>
      @endif
      @if($ticket['premiere'])
      <span class="premiere-badge">Премьера</span>
      @endif
    </div>
  </div>

  <div class="ticket-wrapper">
    <h3 class="ticket-title">{{ $ticket['title'] }}</h3>

    <div class="genre-container">
      @foreach($ticket['genre'] as $genre)
      <span class="ticket-genre">{{ $genre }}</span>
      @endforeach
    </div>

    <div class="ticket-sessions">
      @isset($ticket['places'])
      @foreach($ticket['places'] as $place)
      <button class="session-item"
        data-movie="{{ $ticket['title'] }}"
        data-hall="{{ $place['hall'] }}"
        data-time="{{ $place['time'] }}">
        <div class="session-box">
          <span class="time">{{ $place['time'] }}</span>
          <div class="info">
            <span>{{ $place['type'] }}</span>
            <span>{{ $place['price'] }} ₸</span>
          </div>
        </div>
        <span class="hall">Зал {{ $place['hall'] }}</span>
      </button>
      @endforeach
      @endisset

      @isset($ticket['sessions'])
      <button class="btn-sessions">{{ $ticket['sessions'] }}</button>
      @endisset
    </div>
  </div>
</div>
