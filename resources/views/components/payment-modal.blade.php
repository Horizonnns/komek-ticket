<div id="payment-modal" class="payment-modal">
  <div class="payment-modal__content">
    <button class="payment-modal__close">&times;</button>

    <div class="payment-modal__header">
      <h2 class="payment-modal__title">Оплата билета</h2>
      <p class="payment-modal__subtitle">Безопасная оплата картой</p>
    </div>

    <form id="payment-form" class="payment-form">
      <div class="payment-form__row">
        <label class="payment-form__label">Номер карты</label>
        <div class="payment-form__input-wrapper">
          <input type="text" id="card-number" class="payment-form__input" placeholder="0000 0000 0000 0000" maxlength="19" required>
          <div class="payment-form__card-icons">
            <img src="{{ asset('images/icons/visa.svg') }}" alt="Visa">
            <img src="{{ asset('images/icons/mastercard.svg') }}" alt="Mastercard">
          </div>
        </div>
      </div>

      <div class="payment-form__group">
        <div class="payment-form__row">
          <label class="payment-form__label">Срок действия</label>
          <input type="text" id="card-expiry" class="payment-form__input" placeholder="ММ/ГГ" maxlength="5" required>
        </div>
        <div class="payment-form__row">
          <label class="payment-form__label">CVC/CVV</label>
          <input type="password" id="card-cvc" class="payment-form__input" placeholder="***" maxlength="3" required>
        </div>
      </div>

      <div class="payment-form__row">
        <label class="payment-form__label">Имя держателя</label>
        <input type="text" id="card-name" class="payment-form__input" placeholder="IVAN IVANOV" required>
      </div>

      <div class="payment-summary">
        <div class="payment-summary__item">
          <span>Сумма к оплате:</span>
          <span id="payment-amount" class="payment-summary__total">0 ₸</span>
        </div>
      </div>

      <button type="submit" class="btn-pay-now">
        <span class="btn-pay-now__text">Оплатить сейчас</span>
        <div class="btn-pay-now__loader"></div>
      </button>
    </form>

    <div class="payment-modal__secure">
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
        <path d="M6 0L0 2.625V6.125C0 9.87 2.56 13.361 6 14C9.44 13.361 12 9.87 12 6.125V2.625L6 0Z" fill="#28A745" />
      </svg>
      <span>Ваши данные защищены 256-битным шифрованием</span>
    </div>
  </div>
</div>
