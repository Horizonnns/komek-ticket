export const initCalendarFilter = () => {
    const filterButtons = document.querySelectorAll(".calendar-item");
    const movieCards = document.querySelectorAll(
        ".ticket-card"
    ) as NodeListOf<HTMLElement>;

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedDate = button.getAttribute("data-date");

            movieCards.forEach((card) => {
                const cardDates =
                    card.getAttribute("data-dates")?.split(",") || [];

                if (selectedDate && cardDates.includes(selectedDate)) {
                    card.style.display = "flex";
                    card.animate(
                        [
                            { opacity: 0, transform: "scale(0.95)" },
                            { opacity: 1, transform: "scale(1)" },
                        ],
                        { duration: 300, fill: "forwards" }
                    );
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
};
