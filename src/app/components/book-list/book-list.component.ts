import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BookService } from '../../services/book.service';
import { HistoryService } from '../../services/history.service';
import { Book } from '../../models/book.model';

@Component({
    selector: 'app-book-list',
    standalone: false,
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books: Book[] = [];
    filteredBooks: Book[] = [];
    searchTerm: string = '';
    loading: boolean = true;
    error: string = '';

    constructor(
        private bookService: BookService,
        private historyService: HistoryService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.loadBooks();
    }

    loadBooks(): void {
        this.loading = true;
        this.bookService.getBooks().subscribe({
            next: (data) => {
                this.books = data;
                this.filteredBooks = data;
                this.loading = false;
                this.cdr.detectChanges();
            },
            error: (err) => {
                this.error = 'Error al cargar los libros';
                this.loading = false;
                this.cdr.detectChanges();
                console.error(err);
            }
        });
    }

    filterBooks(): void {
        const term = this.searchTerm.toLowerCase();
        this.filteredBooks = this.books.filter(book =>
            book.title.toLowerCase().includes(term) ||
            book.author.toLowerCase().includes(term) ||
            book.genre.toLowerCase().includes(term)
        );
    }

    deleteBook(book: Book): void {
        if (confirm(`¿Estás seguro de eliminar "${book.title}"?`)) {
            this.bookService.deleteBook(book.id!).subscribe({
                next: () => {
                    this.historyService.addEntry('Eliminado', book.title);
                    this.loadBooks();
                },
                error: (err) => {
                    this.error = 'Error al eliminar el libro';
                    this.cdr.detectChanges();
                    console.error(err);
                }
            });
        }
    }
}
