import { Injectable } from '@angular/core';

export interface HistoryEntry {
    action: string;
    bookTitle: string;
    date: Date;
}

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    private storageKey = 'bookHistory';

    constructor() { }

    getHistory(): HistoryEntry[] {
        const history = localStorage.getItem(this.storageKey);
        if (history) {
            return JSON.parse(history).map((entry: any) => ({
                ...entry,
                date: new Date(entry.date)
            }));
        }
        return [];
    }

    addEntry(action: string, bookTitle: string): void {
        const history = this.getHistory();
        const newEntry: HistoryEntry = {
            action,
            bookTitle,
            date: new Date()
        };
        history.unshift(newEntry);
        if (history.length > 50) {
            history.pop();
        }
        localStorage.setItem(this.storageKey, JSON.stringify(history));
    }

    clearHistory(): void {
        localStorage.removeItem(this.storageKey);
    }
}
