import { toast } from "./toast";
import { StorageService } from "./storage";

export interface ITicket {
    id: string;
    movie: string;
    time: string;
    hall: string;
    seats: number[];
    total: number;
    date: string;
    paid?: boolean;
}

export const initMyTickets = () => {
    const myTicketsBtn = document.querySelector(".header__btn");
    const myTicketsModal = document.getElementById("my-tickets-modal");
    const closeBtn = document.querySelector(".my-tickets-modal__close");
    const ticketsContainer = document.querySelector(".my-tickets-list");

    const renderTickets = () => {
        if (!ticketsContainer) return;

        const tickets = StorageService.getTickets().reverse();

        if (tickets.length === 0) {
            ticketsContainer.innerHTML =
                '<div class="no-tickets">У вас пока нет купленных билетов</div>';
            return;
        }

        ticketsContainer.innerHTML = tickets
            .map(
                (ticket) => `
            <div class="my-ticket-card ${
                ticket.paid ? "my-ticket-card--paid" : ""
            }" data-id="${ticket.id}">
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
                    ${
                        ticket.paid
                            ? '<span class="ticket-status-paid">Оплачено</span>'
                            : `
                    <div class="my-ticket-card__actions">
                        <button class="btn-ticket btn-ticket--cancel" data-action="cancel">Отменить</button>
                        <button class="btn-ticket btn-ticket--pay" data-action="pay">Оплатить</button>
                    </div>
                    `
                    }
                </div>
            </div>
        `
            )
            .join("");

        ticketsContainer.querySelectorAll(".btn-ticket").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const target = e.currentTarget as HTMLElement;
                const id = target
                    .closest(".my-ticket-card")
                    ?.getAttribute("data-id");
                const action = target.getAttribute("data-action");

                if (id && action === "cancel") {
                    StorageService.deleteTicket(id);
                    renderTickets();
                    toast.show({
                        message: "Билет успешно отменен",
                        type: "success",
                    });
                } else if (id && action === "pay") {
                    const tickets = StorageService.getTickets();
                    const ticket = tickets.find((t) => t.id === id);
                    if (ticket) {
                        window.dispatchEvent(
                            new CustomEvent("initPayment", {
                                detail: { id: ticket.id, amount: ticket.total },
                            })
                        );
                    }
                }
            });
        });
    };

    window.addEventListener("ticketPaid", (e: any) => {
        const { id } = e.detail;
        StorageService.markAsPaid(id);
        renderTickets();
    });

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
    StorageService.saveTicket(ticket);
};
