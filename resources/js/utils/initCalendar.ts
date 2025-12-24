export const initCalendar = () => {
    const items = document.querySelectorAll(".calendar-item");

    items.forEach((item) => {
        item.addEventListener("click", () => {
            items.forEach((i) => i.classList.remove("active"));
            item.classList.add("active");

            console.log(`Выбрана дата: ${item.getAttribute("data-date")}`);
        });
    });
};
