import * as utils from "./utils";

document.addEventListener("DOMContentLoaded", () => {
    utils.swiper();
    utils.ticketAnimation();
    utils.initCalendarFilter();
    utils.initBookingSystem();
    utils.initMyTickets();
    utils.initPaymentSystem();
    utils.registerSW();
});
