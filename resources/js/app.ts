import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

document.addEventListener("DOMContentLoaded", () => {
    const tickets = document.querySelectorAll(".ticket-card");

    tickets.forEach((ticket, index) => {
        setTimeout(() => {
            ticket.classList.add("fade-in-visible");
        }, index * 150);
    });

    new Swiper(".header__slide", {
        modules: [Autoplay, EffectFade],
        effect: "fade",
        fadeEffect: { crossFade: true },
        loop: true,
        autoplay: { delay: 6000, disableOnInteraction: false },
    });
});
