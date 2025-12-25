type ToastType = "success" | "error";

interface ToastOptions {
    message: string;
    type?: ToastType;
    duration?: number;
}

class ToastService {
    private container: HTMLElement | null = null;

    private createContainer() {
        const container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
        this.container = container;
    }

    public show({ message, type = "success", duration = 4000 }: ToastOptions) {
        if (!this.container) {
            this.createContainer();
        }

        const toast = document.createElement("div");
        toast.className = `toast toast--${type}`;

        toast.innerHTML = `
            <div class="toast__content">
                <span class="toast__message">${message}</span>
            </div>
            <button class="toast__close">&times;</button>
            <div class="toast__progress"></div>
        `;

        const progress = toast.querySelector(".toast__progress") as HTMLElement;
        if (progress && duration > 0) {
            progress.style.animation = `progress-animation ${duration}ms linear forwards`;
        }

        const closeBtn = toast.querySelector(".toast__close");
        closeBtn?.addEventListener("click", () => this.hide(toast));

        this.container?.appendChild(toast);

        if (duration > 0) {
            setTimeout(() => this.hide(toast), duration);
        }
    }

    private hide(toast: HTMLElement) {
        if (toast.classList.contains("hiding")) return;

        toast.classList.add("hiding");
        toast.addEventListener("animationend", (e) => {
            if ((e as AnimationEvent).animationName === "toast-luxury-out") {
                toast.remove();
                if (this.container?.childNodes.length === 0) {
                    this.container.remove();
                    this.container = null;
                }
            }
        });
    }
}

export const toast = new ToastService();
