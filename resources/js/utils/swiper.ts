import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export const swiper = () => {
    return new Swiper(".header__slide", {
        modules: [Autoplay, EffectFade],
        effect: "fade",
        loop: true,
        fadeEffect: { crossFade: true },
        autoplay: { delay: 6000, disableOnInteraction: false },
    });
};
