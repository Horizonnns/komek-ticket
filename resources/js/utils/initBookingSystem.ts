import { saveTicket, ITicket } from "./myTickets";
import { toast } from "./toast";

export const initBookingSystem = () => {
    const modal = document.getElementById("booking-modal");
    const hallGrid = document.getElementById("hall-grid");
    const totalDisplay = document.getElementById("total-amount");
    const selectedSeatsDisplay = document.getElementById("selected-seats");
    const freeSeatsDisplay = document.getElementById("free-seats");
    const occupiedSeatsDisplay = document.getElementById("occupied-seats");
    const sessionButtons = document.querySelectorAll(".session-item");
    const confirmBtn = document.getElementById("confirm-booking");
    const count = 60;

    let selectedSeats: number[] = [];
    let currentTicketPrice = 0;

    sessionButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const movieTitle = btn.getAttribute("data-movie");
            const sessionTime = btn.getAttribute("data-time");
            const hallNumber = btn.getAttribute("data-hall");

            document.getElementById("modal-movie-title")!.textContent =
                movieTitle || "";
            document.getElementById("modal-session-time")!.textContent =
                sessionTime || "";
            document.getElementById(
                "modal-hall"
            )!.textContent = `Зал ${hallNumber}`;

            const priceText =
                btn.querySelector(".info span:last-child")?.textContent || "0";
            currentTicketPrice = parseInt(priceText.replace(/\D/g, ""));

            if (modal) modal.style.display = "flex";
            generateHall(count);
        });
    });

    function generateHall(count: number) {
        if (!hallGrid) return;
        hallGrid.innerHTML = "";
        selectedSeats = [];

        for (let i = 1; i <= count; i++) {
            const seat = document.createElement("div");
            seat.classList.add("seat");

            if (Math.random() < 0.2) seat.classList.add("seat--occupied");

            seat.addEventListener("click", () => {
                if (seat.classList.contains("seat--occupied")) return;

                seat.classList.toggle("seat--selected");
                const seatIndex = i;

                if (seat.classList.contains("seat--selected")) {
                    selectedSeats.push(seatIndex);
                } else {
                    selectedSeats = selectedSeats.filter(
                        (s) => s !== seatIndex
                    );
                }
                updateTotal();
            });

            hallGrid.appendChild(seat);
        }
        updateTotal();
    }

    function updateTotal() {
        const occupiedCount =
            hallGrid?.querySelectorAll(".seat--occupied").length || 0;
        const selectedCount = selectedSeats.length;
        const freeCount = count - occupiedCount - selectedCount;

        if (totalDisplay) {
            totalDisplay.textContent = (
                selectedCount * currentTicketPrice
            ).toString();
        }
        if (selectedSeatsDisplay) {
            selectedSeatsDisplay.textContent = selectedCount.toString();
        }
        if (freeSeatsDisplay) {
            freeSeatsDisplay.textContent = freeCount.toString();
        }
        if (occupiedSeatsDisplay) {
            occupiedSeatsDisplay.textContent = (
                occupiedCount + selectedCount
            ).toString();
        }
    }

    confirmBtn?.addEventListener("click", () => {
        const selectedSeatsCount =
            document.querySelectorAll(".seat--selected").length;

        if (selectedSeatsCount === 0) {
            toast.show({
                message: "Пожалуйста, выберите хотя бы одно место",
                type: "error",
            });
            return;
        }

        const movieTitle =
            document.getElementById("modal-movie-title")?.textContent || "";
        const sessionTime =
            document.getElementById("modal-session-time")?.textContent || "";
        const hallName =
            document.getElementById("modal-hall")?.textContent || "";
        const total = parseInt(totalDisplay?.textContent || "0");

        confirmBtn.textContent = "Обработка...";
        confirmBtn.setAttribute("disabled", "true");

        setTimeout(() => {
            const newTicket: ITicket = {
                id: Math.random().toString(36).substr(2, 9).toUpperCase(),
                movie: movieTitle,
                time: sessionTime,
                hall: hallName,
                seats: [...selectedSeats],
                total: total,
                date: new Date().toLocaleDateString(),
            };

            saveTicket(newTicket);

            toast.show({
                message: `Вы забронировали ${selectedSeatsCount} мест(а). Инструкция отправлена на ваш номер.`,
                type: "success",
            });

            const modal = document.getElementById("booking-modal");
            if (modal) modal.style.display = "none";
            document.body.style.overflow = "auto";

            confirmBtn.textContent = "Забронировать";
            confirmBtn.removeAttribute("disabled");

            document.querySelectorAll(".seat--selected").forEach((seat) => {
                seat.classList.remove("seat--selected");
                seat.classList.add("seat--occupied");
            });

            selectedSeats = [];
            updateTotal();
        }, 1500);
    });

    document.querySelector(".modal__close")?.addEventListener("click", () => {
        if (modal) modal.style.display = "none";
    });
};
