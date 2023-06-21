import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent extends BookComponent {
  override bookService: BookService;
  override name!: string;
  override done!: boolean;
  override pages!: number;
  override description!: string;
  override author!: string;
  override isArchived!: boolean;
  override archivedBooks!: { name: string; description: string; pages: number; author: string; isArchived: boolean; done: boolean; }[];
  override books!: Book[];

  constructor(bookService: BookService) {
    super(bookService);
    this.bookService = bookService;
  }

  override Unarchive(book: Book): void {
    throw new Error('Method not implemented.');
  }
}
