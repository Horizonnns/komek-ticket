<header class="header">
  <div class="header__slide swiper">
    <div class="swiper-wrapper">
      @php
      $videos = [
      'https://msk-cdp10.playfamily.ru/vod/cid/adfc1fa27cf6-1766756553-utBcHDduePMXO4Qts9aruQ/storage127/trl/a2e42d5c-83f0-4ff3-995c-eefe6c5328ca.webm',
      'https://spb-cdp33.playfamily.ru/vod/cid/adfc1fa27cf6-1766757031-begVXY6ufWfPbWF4zpj7BQ/storage123/trl/28cfa814-bb0d-4314-b350-eddb1ee5016c.webm',
      'https://spb-cdp40.playfamily.ru/vod/cid/adfc1fa27cf6-1766763695-allQe-rUAswF2MxMgM4qJg/storage121/trl/739086c2-2858-4632-aa7e-16cbb2658e0b.webm',
      'https://msk-cdp6.playfamily.ru/vod/cid/adfc1fa27cf6-1766758722-hCL2g-ZOjrVSXBNuBXD0mQ/storage111/trl/78549c9b-f168-42dc-abf9-5f2741736ee7.webm'
      ];
      @endphp

      @foreach($videos as $url)
      <div class="swiper-slide">
        <video src="{{ $url }}" autoplay loop muted playsinline></video>
      </div>
      @endforeach
    </div>

    <div class="swiper-pagination"></div>
  </div>

  <div class="header__container">
    <div class="header__logo">
      <img src="{{ asset('images/icons/komek-logo.svg') }}" alt="Komek By Ticket">
    </div>

    <div class="header__info">
      <span class="header__info-title">Казахстан</span>
      <span class="header__info-sub">улица Тестовая 1</span>
    </div>

    <div class="header__info">
      <a href="tel:+77750000001" class="header__info-title">+7 (775) 000 00 01</a>
      <span class="header__info-sub">Касса</span>
    </div>

    <div class="header__actions">
      <div class="header__socials">
        <a href="#"><img src="{{ asset('images/icons/facebook.svg') }}" alt="FB"></a>
        <a href="#"><img src="{{ asset('images/icons/instagram.svg') }}" alt="IG"></a>
        <a href="#"><img src="{{ asset('images/icons/youtube.svg') }}" alt="YT"></a>
        <a href="#"><img src="{{ asset('images/icons/vk.svg') }}" alt="VK"></a>
      </div>

      <button class="header__btn">
        Мне пришёл билет
      </button>
    </div>

  </div>
</header>
