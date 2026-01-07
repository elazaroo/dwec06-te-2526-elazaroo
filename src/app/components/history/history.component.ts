import { Component, OnInit } from '@angular/core';
import { HistoryService, HistoryEntry } from '../../services/history.service';

@Component({
    selector: 'app-history',
    standalone: false,
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

    history: HistoryEntry[] = [];

    constructor(private historyService: HistoryService) { }

    ngOnInit(): void {
        this.loadHistory();
    }

    loadHistory(): void {
        this.history = this.historyService.getHistory();
    }

    clearHistory(): void {
        if (confirm('¿Estás seguro de borrar el historial?')) {
            this.historyService.clearHistory();
            this.loadHistory();
        }
    }

    getActionClass(action: string): string {
        switch (action) {
            case 'Creado': return 'action-create';
            case 'Actualizado': return 'action-update';
            case 'Eliminado': return 'action-delete';
            default: return '';
        }
    }
}
