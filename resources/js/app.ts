document.addEventListener("DOMContentLoaded", () => {
    const tickets = document.querySelectorAll(".ticket-card");

    tickets.forEach((ticket, index) => {
        setTimeout(() => {
            ticket.classList.add("fade-in-visible");
        }, index * 150);
    });
});
