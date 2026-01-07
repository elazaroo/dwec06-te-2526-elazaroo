import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { HistoryService } from '../../services/history.service';
import { Book } from '../../models/book.model';

@Component({
    selector: 'app-book-form',
    standalone: false,
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

    book: Book = {
        title: '',
        author: '',
        year: new Date().getFullYear(),
        genre: '',
        description: ''
    };

    isEditMode: boolean = false;
    bookId: number | null = null;
    loading: boolean = false;
    error: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private bookService: BookService,
        private historyService: HistoryService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode = true;
            this.bookId = +id;
            this.loadBook(this.bookId);
        }
    }

    loadBook(id: number): void {
        this.loading = true;
        this.bookService.getBookById(id).subscribe({
            next: (data) => {
                this.book = data;
                this.loading = false;
                this.cdr.detectChanges();
            },
            error: (err) => {
                this.error = 'Error al cargar el libro';
                this.loading = false;
                this.cdr.detectChanges();
                console.error(err);
            }
        });
    }

    onSubmit(): void {
        if (this.isEditMode && this.bookId) {
            this.bookService.updateBook(this.bookId, this.book).subscribe({
                next: () => {
                    this.historyService.addEntry('Actualizado', this.book.title);
                    this.router.navigate(['/books']);
                },
                error: (err) => {
                    this.error = 'Error al actualizar el libro';
                    this.cdr.detectChanges();
                    console.error(err);
                }
            });
        } else {
            this.bookService.createBook(this.book).subscribe({
                next: () => {
                    this.historyService.addEntry('Creado', this.book.title);
                    this.router.navigate(['/books']);
                },
                error: (err) => {
                    this.error = 'Error al crear el libro';
                    this.cdr.detectChanges();
                    console.error(err);
                }
            });
        }
    }

    cancel(): void {
        this.router.navigate(['/books']);
    }
}
