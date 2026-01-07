import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
    selector: 'app-book-detail',
    standalone: false,
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    book: Book | null = null;
    loading: boolean = true;
    error: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private bookService: BookService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.loadBook(+id);
        }
    }

    loadBook(id: number): void {
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

    goBack(): void {
        this.router.navigate(['/books']);
    }
}
