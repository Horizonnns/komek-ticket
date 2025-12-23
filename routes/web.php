<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $tickets = [
        [
            'id' => 1,
            'title' => 'Праздники',
            "genre" => "комедия",
            'poster' => 'bg-ticket.jpg',
            "premiere" => true,
            "places" => [
              [
                'time' => '15:35',
                'type' => '2D',
                'price' => 1233,
                'date' => '25.12.2025',
                'hall' => '3'
              ],
              [
                'time' => '17:40',
                'type' => '2D',
                'price' => 3080,
                'date' => '25.12.2025',
                'hall' => '6 VIP'
              ],
              [
                'time' => '19:15',
                'type' => '2D',
                'price' => 1700,
                'date' => '25.12.2025',
                'hall' => '4'
              ],
              [
                'time' => '21:05',
                'type' => '2D',
                'price' => 1700,
                'date' => '25.12.2025',
                'hall' => '3'
              ],
              [
                'time' => '21:40',
                'type' => '2D',
                'price' => 4030,
                'date' => '25.12.2025',
                'hall' => '6 VIP'
              ],
              [
                'time' => '22:45',
                'type' => '2D',
                'price' => 1700,
                'date' => '25.12.2025',
                'hall' => '3'
              ],
            ],
        ],
        [
            'id' => 2,
            'title' => 'Мег 2: Бездна',
            "genre" => "экшен, триллер",
            'poster' => 'bg-ticket.jpg',
            "premiere" => false,
            "places" => [
              [
                'time' => '15:35',
                'type' => '2D',
                'price' => 4030,
                'date' => '25.12.2025',
                'hall' => '6 VIP'
              ],
              [
                'time' => '17:40',
                'type' => '2D',
                'price' => 3080,
                'date' => '25.12.2025',
                'hall' => '2 Auro'
              ],
              [
                'time' => '19:15',
                'type' => '2D',
                'price' => 1700,
                'date' => '25.12.2025',
                'hall' => '4'
              ],
            ],
        ],
        [
            'id' => 3,
            'title' => 'Заложники',
            "genre" => "экшен, триллер",
            'poster' => 'bg-ticket.jpg',
            "premiere" => false,
            "places" => [
              [
                'time' => '16:10',
                'type' => '2D',
                'price' => 4030,
                'date' => '25.12.2025',
                'hall' => '1'
              ],
              [
                'time' => '21:30',
                'type' => '2D',
                'price' => 3080,
                'date' => '25.12.2025',
                'hall' => '1'
              ],
            ],
        ],
        [
            'id' => 4,
            'title' => 'Леди Баг и Супер-Кот: Пробуждение силы',
            "genre" => "фентези, боевик, мелодрама, мультфильм, комедия",
            'poster' => 'bg-ticket.jpg',
            "premiere" => false,
            "places" => [
              [
                'time' => '16:10',
                'type' => '2D',
                'price' => 4030,
                'date' => '25.12.2025',
                'hall' => '1'
              ],
              [
                'time' => '21:30',
                'type' => '2D',
                'price' => 3080,
                'date' => '25.12.2025',
                'hall' => '1'
              ],
            ],
        ],
        [
            'id' => 5,
            'title' => 'Когда не загрузилась афиша',
            "genre" => "комедия",
            'poster' => 'bg-ticket.jpg',
            "premiere" => true,
            "places" => [
              [
                'time' => '15:35',
                'type' => '2D',
                'price' => 1233,
                'date' => '25.12.2025',
                'hall' => '3'
              ],
              [
                'time' => '17:40',
                'type' => '2D',
                'price' => 3080,
                'date' => '25.12.2025',
                'hall' => '6 VIP'
              ],
            ],
        ],
        [
            'id' => 6,
            'title' => 'Руслан и Людмила. Больше, чем сказка',
            "genre" => "анимационое, приключение",
            'poster' => 'bg-ticket.jpg',
            "premiere" => true,
            'sessions'=> 'Сеансы на Завтра'
        ],
    ];

    return view('welcome', compact('tickets'));
});
