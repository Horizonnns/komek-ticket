<footer class="footer">
  <div class="footer__container">
    <div class="footer__logo">
      <img src="{{ asset('images/icons/komek-logo.svg') }}" alt="Komek By Ticket">
    </div>
    <div class="footer__info">
      <a href="mailto:admin@example.com" class="footer__info-title">admin@example.com</a>
      <a href="mailto:ticket@example.com" class="footer__info-title">ticket@example.com</a>
      <span class="footer__info-sub">улица Тестовая 1</span>
    </div>
    <div class="footer__info">
      <a href="tel:+77750000001" class="footer__info-title">+7 (775) 000 00 01</a>
      <span class="footer__info-sub">Касса</span>
    </div>
    <div class="footer__info">
      <span class="footer__info-title">08:00 - 22:00 с пн.-пт.</span>
      <span class="footer__info-sub">График работы</span>
    </div>
  </div>

  <div class="footer__middle">
    <div class="footer__menu">
      <h4 class="footer__column-title">Меню</h4>
      <nav class="footer__nav">
        <a href="#">Афиша</a>
        <a href="#">Сеансы</a>
        <a href="#">Пушкинская карта</a>
        <a href="#">Кинотеатр</a>
        <a href="#">Контакты</a>
      </nav>
    </div>

    <div class="footer__payment">
      <h4 class="footer__column-title">Способы оплаты:</h4>
      <div class="footer__payment-icons">
        <img src="{{ asset('images/icons/mastercard.svg') }}" alt="Mastercard">
        <img src="{{ asset('images/icons/visa.svg') }}" alt="Visa">
      </div>

      <p class="footer__legal-text">
        Все сеансы начинаются с рекламно-информационного блока. <br>
        Точную продолжительность сеансов можно уточнить в кинотеатре.
      </p>
    </div>
  </div>

  <hr class="footer__divider">

  <div class="footer__bottom">
    <div class="footer__socials">
      <a href="#"><img src="{{ asset('images/icons/facebook.svg') }}" alt="FB"></a>
      <a href="#"><img src="{{ asset('images/icons/instagram.svg') }}" alt="IG"></a>
      <a href="#"><img src="{{ asset('images/icons/youtube.svg') }}" alt="YT"></a>
      <a href="#"><img src="{{ asset('images/icons/vk.svg') }}" alt="VK"></a>
    </div>
    <p class="footer__copyright">© 2025 Все права защищены</p>
  </div>
</footer>
