export const ticketAnimation = () => {
    const tickets = document.querySelectorAll(".ticket-card");

    return tickets.forEach((ticket, index) => {
        setTimeout(() => {
            ticket.classList.add("fade-in-visible");
        }, index * 150);
    });
};
