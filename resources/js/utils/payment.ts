import { toast } from "./toast";

export const initPaymentSystem = () => {
    const paymentModal = document.getElementById("payment-modal");
    const paymentForm = document.getElementById(
        "payment-form"
    ) as HTMLFormElement;
    const closeBtn = document.querySelector(".payment-modal__close");
    const amountDisplay = document.getElementById("payment-amount");
    const cardInput = document.getElementById(
        "card-number"
    ) as HTMLInputElement;
    const expiryInput = document.getElementById(
        "card-expiry"
    ) as HTMLInputElement;

    let currentTicketId: string | null = null;

    const openModal = (id: string, amount: number) => {
        currentTicketId = id;
        if (amountDisplay) amountDisplay.textContent = `${amount} ₸`;
        if (paymentModal) {
            paymentModal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    };

    const closeModal = () => {
        if (paymentModal) {
            paymentModal.style.display = "none";
            const ticketsModal = document.getElementById("my-tickets-modal");
            if (!ticketsModal || ticketsModal.style.display !== "flex") {
                document.body.style.overflow = "auto";
            }
        }
        paymentForm?.reset();
    };

    cardInput?.addEventListener("input", (e) => {
        let value = cardInput.value.replace(/\D/g, "");
        value = value.match(/.{1,4}/g)?.join(" ") || value;
        cardInput.value = value;
    });

    expiryInput?.addEventListener("input", (e) => {
        let value = expiryInput.value.replace(/\D/g, "");
        if (value.length >= 2) {
            value = value.substring(0, 2) + "/" + value.substring(2, 4);
        }
        expiryInput.value = value;
    });

    closeBtn?.addEventListener("click", closeModal);

    paymentModal?.addEventListener("click", (e) => {
        if (e.target === paymentModal) closeModal();
    });

    paymentForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitBtn = paymentForm.querySelector(".btn-pay-now");

        submitBtn?.classList.add("loading");

        setTimeout(() => {
            submitBtn?.classList.remove("loading");
            closeModal();
            toast.show({
                message: "Оплата прошла успешно! Билет подтвержден.",
                type: "success",
            });

            window.dispatchEvent(
                new CustomEvent("ticketPaid", {
                    detail: { id: currentTicketId },
                })
            );
        }, 2000);
    });

    window.addEventListener("initPayment", (e: any) => {
        const { id, amount } = e.detail;
        openModal(id, amount);
    });
};
