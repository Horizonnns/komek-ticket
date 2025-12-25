type TToastType = "success" | "error";

interface IToastOptions {
    message: string;
    type?: TToastType;
    duration?: number;
}

let container: HTMLElement | null = null;

const createContainer = () => {
    const freshContainer = document.createElement("div");
    freshContainer.className = "toast-container";
    document.body.appendChild(freshContainer);
    container = freshContainer;
    return freshContainer;
};

const hide = (toastElement: HTMLElement) => {
    if (toastElement.classList.contains("hiding")) return;

    toastElement.classList.add("hiding");
    toastElement.addEventListener("animationend", (e) => {
        if ((e as AnimationEvent).animationName === "toast-luxury-out") {
            toastElement.remove();
            if (container && container.childNodes.length === 0) {
                container.remove();
                container = null;
            }
        }
    });
};

export const toast = {
    show: ({ message, type = "success", duration = 4000 }: IToastOptions) => {
        const currentContainer = container || createContainer();

        const toastElement = document.createElement("div");
        toastElement.className = `toast toast--${type}`;

        toastElement.innerHTML = `
            <div class="toast__content">
                <span class="toast__message">${message}</span>
            </div>
            <button class="toast__close">&times;</button>
            <div class="toast__progress"></div>
        `;

        const progress = toastElement.querySelector(
            ".toast__progress"
        ) as HTMLElement;
        if (progress && duration > 0) {
            progress.style.animation = `progress-animation ${duration}ms linear forwards`;
        }

        const closeBtn = toastElement.querySelector(".toast__close");
        closeBtn?.addEventListener("click", () => hide(toastElement));

        currentContainer.appendChild(toastElement);

        if (duration > 0) {
            setTimeout(() => hide(toastElement), duration);
        }
    },
};
