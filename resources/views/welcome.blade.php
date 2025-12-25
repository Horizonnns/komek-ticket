@extends('layouts.app')

@section('title', 'Главная')

@section('content')
<section class="tickets">
  <div class="controls container">
    <div class="nav-bar">
      <nav class="nav-bar__links">
        <a href="#" class="active">Афиша</a>
        <a href="#">Сеансы</a>
        <a href="#">Кинотеатр</a>
        <a href="#">Контакты</a>
      </nav>
      <div class="nav-bar__actions">
        <button class="btn-login">Войти</button>
        <button class="btn-review">Написать отзыв</button>
      </div>
    </div>
  </div>

  <div class="calendar-bar container">
    <div class="calendar-bar__items ">
      <button class="calendar-item active" data-date="today">Сегодня</button>
      <button class="calendar-item" data-date="tomorrow">Завтра</button>
      <button class="calendar-item" data-date="sep-10">Воскресенье, 10 сент.</button>
      <button class="calendar-item" data-date="sep-11">Понедельник, 11 сент.</button>
      <button class="calendar-item" data-date="sep-12">Вторник, 12 сент.</button>
      <button class="calendar-item" data-date="sep-13">Среда, 13 сент.</button>
    </div>
  </div>

  <div class="ticket-grid container">
    @foreach($tickets as $ticket)
    <x-ticket-card :ticket="$ticket" />
    @endforeach
  </div>
</section>
@endsection
