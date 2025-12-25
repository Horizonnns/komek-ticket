import { ITicket } from "./myTickets";

const TICKETS_KEY = "my_tickets";

export const StorageService = {
    getTickets(): ITicket[] {
        try {
            return JSON.parse(localStorage.getItem(TICKETS_KEY) || "[]");
        } catch (e) {
            console.error("Failed to parse tickets from storage", e);
            return [];
        }
    },

    saveTicket(ticket: ITicket): void {
        const tickets = this.getTickets();
        tickets.push(ticket);
        localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
    },

    deleteTicket(id: string): void {
        const tickets = this.getTickets().filter((t) => t.id !== id);
        localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
    },

    markAsPaid(id: string): void {
        const tickets = this.getTickets();
        const index = tickets.findIndex((t) => t.id === id);
        if (index !== -1) {
            tickets[index].paid = true;
            localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
        }
    },
};
