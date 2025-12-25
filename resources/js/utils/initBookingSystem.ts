import { ITicket } from "./myTickets";
import { toast } from "./toast";
import { StorageService } from "./storage";

export const initBookingSystem = () => {
    const modal = document.getElementById("booking-modal");
    const hallGrid = document.getElementById("hall-grid");
    const totalDisplay = document.getElementById("total-amount");
    const selectedSeatsDisplay = document.getElementById("selected-seats");
    const freeSeatsDisplay = document.getElementById("free-seats");
    const occupiedSeatsDisplay = document.getElementById("occupied-seats");
    const confirmBtn = document.getElementById(
        "confirm-booking"
    ) as HTMLButtonElement;

    let selectedSeats: number[] = [];
    let currentTicketPrice = 0;
    const totalSeats = 60;

    const openModal = () => {
        if (modal) {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    };

    const closeModal = () => {
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };

    const updateUI = () => {
        const occupiedCount =
            hallGrid?.querySelectorAll(".seat--occupied").length || 0;
        const selectedCount = selectedSeats.length;
        const freeCount = totalSeats - occupiedCount - selectedCount;

        if (totalDisplay)
            totalDisplay.textContent = (
                selectedCount * currentTicketPrice
            ).toString();
        if (selectedSeatsDisplay)
            selectedSeatsDisplay.textContent = selectedCount.toString();
        if (freeSeatsDisplay)
            freeSeatsDisplay.textContent = freeCount.toString();
        if (occupiedSeatsDisplay)
            occupiedSeatsDisplay.textContent = (
                occupiedCount + selectedCount
            ).toString();
    };

    const toggleSeat = (seat: HTMLElement, index: number) => {
        if (seat.classList.contains("seat--occupied")) return;

        seat.classList.toggle("seat--selected");
        if (seat.classList.contains("seat--selected")) {
            selectedSeats.push(index);
        } else {
            selectedSeats = selectedSeats.filter((s) => s !== index);
        }
        updateUI();
    };

    const generateHall = () => {
        if (!hallGrid) return;
        hallGrid.innerHTML = "";
        selectedSeats = [];

        for (let i = 1; i <= totalSeats; i++) {
            const seat = document.createElement("div");
            seat.classList.add("seat");

            if (Math.random() < 0.2) seat.classList.add("seat--occupied");

            seat.addEventListener("click", () => toggleSeat(seat, i));
            hallGrid.appendChild(seat);
        }
        updateUI();
    };

    const handleSessionClick = (btn: HTMLElement) => {
        const movieTitle = btn.getAttribute("data-movie") || "";
        const sessionTime = btn.getAttribute("data-time") || "";
        const hallNumber = btn.getAttribute("data-hall") || "";

        document.getElementById("modal-movie-title")!.textContent = movieTitle;
        document.getElementById("modal-session-time")!.textContent =
            sessionTime;
        document.getElementById(
            "modal-hall"
        )!.textContent = `Зал ${hallNumber}`;

        const priceText =
            btn.querySelector(".info span:last-child")?.textContent || "0";
        currentTicketPrice = parseInt(priceText.replace(/\D/g, ""));

        openModal();
        generateHall();
    };

    const handleConfirmBooking = () => {
        if (selectedSeats.length === 0) {
            toast.show({
                message: "Пожалуйста, выберите хотя бы одно место",
                type: "error",
            });
            return;
        }

        if (confirmBtn) {
            confirmBtn.textContent = "Обработка...";
            confirmBtn.disabled = true;
        }

        setTimeout(() => {
            const newTicket: ITicket = {
                id: Math.random().toString(36).substr(2, 9).toUpperCase(),
                movie:
                    document.getElementById("modal-movie-title")?.textContent ||
                    "",
                time:
                    document.getElementById("modal-session-time")
                        ?.textContent || "",
                hall: document.getElementById("modal-hall")?.textContent || "",
                seats: [...selectedSeats],
                total: parseInt(totalDisplay?.textContent || "0"),
                date: new Date().toLocaleDateString(),
            };

            StorageService.saveTicket(newTicket);
            toast.show({
                message: `Вы забронировали ${selectedSeats.length} мест(а). Инструкция отправлена на ваш номер.`,
                type: "success",
            });

            closeModal();

            if (confirmBtn) {
                confirmBtn.textContent = "Забронировать";
                confirmBtn.disabled = false;
            }

            hallGrid?.querySelectorAll(".seat--selected").forEach((seat) => {
                seat.classList.remove("seat--selected");
                seat.classList.add("seat--occupied");
            });
            selectedSeats = [];
            updateUI();
        }, 1500);
    };

    const sessionButtons = document.querySelectorAll(".session-item");
    sessionButtons.forEach((btn) => {
        btn.addEventListener("click", () =>
            handleSessionClick(btn as HTMLElement)
        );
    });

    confirmBtn?.addEventListener("click", handleConfirmBooking);

    document
        .querySelector(".modal__close")
        ?.addEventListener("click", closeModal);
};
