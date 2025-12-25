<div id="booking-modal" class="modal">
  <div class="modal__content">
    <button class="modal__close">&times;</button>

    <h2 class="modal__title">Выбор мест</h2>
    <div class="modal__info">
      <span id="modal-movie-title">Фильм</span> |
      <span id="modal-session-time">00:00</span> |
      <span id="modal-hall">Зал</span>
    </div>

    <div class="hall-screen"></div>
    <div class="hall-grid" id="hall-grid">
    </div>

    <div class="hall-legend">
      <div class="legend-item">Свободно: <span id="free-seats"></span> мест</div>
      <div class="legend-item">Занято: <span id="occupied-seats"></span> мест</div>
      <div class="legend-item">Выбрано: <span id="selected-seats"></span> мест</div>
      <div class="total-price">Итого: <span id="total-amount">0</span> ₸</div>

    </div>

    <div class="modal__footer">
      <button class="btn-book" id="confirm-booking">Забронировать</button>
    </div>
  </div>
</div>
