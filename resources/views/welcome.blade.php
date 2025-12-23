@extends('layouts.app')

@section('title', 'Главная')

@section('content')
<section class="tickets">
    <div class="container">

        <div class="ticket-grid">
            @foreach($tickets as $ticket)
                <x-ticket-card :ticket="$ticket" />
            @endforeach
        </div>
    </div>
</section>
@endsection
