export interface ITicket {
    id: string;
    movie: string;
    time: string;
    hall: string;
    seats: number[];
    total: number;
    date: string;
}

export const initMyTickets = () => {
    const myTicketsBtn = document.querySelector(".header__btn");
    const myTicketsModal = document.getElementById("my-tickets-modal");
    const closeBtn = document.querySelector(".my-tickets-modal__close");
    const ticketsContainer = document.querySelector(".my-tickets-list");

    const renderTickets = () => {
        if (!ticketsContainer) return;

        const tickets: ITicket[] = JSON.parse(
            localStorage.getItem("my_tickets") || "[]"
        ).reverse();

        if (tickets.length === 0) {
            ticketsContainer.innerHTML =
                '<div class="no-tickets">У вас пока нет купленных билетов</div>';
            return;
        }

        ticketsContainer.innerHTML = tickets
            .map(
                (ticket) => `
            <div class="my-ticket-card">
                <div class="my-ticket-card__content-wrapper">
                    <div class="my-ticket-card__main">
                        <div class="my-ticket-card__header">
                            <span class="my-ticket-card__id">#${
                                ticket.id
                            }</span>
                            <span class="my-ticket-card__date">${
                                ticket.date
                            }</span>
                        </div>
                        <div class="my-ticket-card__body">
                            <h3 class="my-ticket-card__movie">${
                                ticket.movie
                            }</h3>
                            <div class="my-ticket-card__info">
                                <p><span>Время:</span> ${ticket.time}</p>
                                <p><span>Зал:</span> ${ticket.hall}</p>
                                <p><span>Места:</span> ${ticket.seats.join(
                                    ", "
                                )}</p>
                            </div>
                        </div>
                    </div>
                    <div class="my-ticket-card__qr">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${
                            ticket.id
                        }" alt="QR Code">
                        <span>Сканируйте на входе</span>
                    </div>
                </div>
                <div class="my-ticket-card__footer">
                    <span class="my-ticket-card__total">Итого: ${
                        ticket.total
                    } ₸</span>
                </div>
            </div>
        `
            )
            .join("");
    };

    myTicketsBtn?.addEventListener("click", () => {
        renderTickets();
        if (myTicketsModal) {
            myTicketsModal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    });

    closeBtn?.addEventListener("click", () => {
        if (myTicketsModal) {
            myTicketsModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    myTicketsModal?.addEventListener("click", (e) => {
        if (e.target === myTicketsModal) {
            myTicketsModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
};

export const saveTicket = (ticket: ITicket) => {
    const existingTickets = JSON.parse(
        localStorage.getItem("my_tickets") || "[]"
    );
    existingTickets.push(ticket);
    localStorage.setItem("my_tickets", JSON.stringify(existingTickets));
};
