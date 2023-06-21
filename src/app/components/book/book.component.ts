import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model'
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent{
  name!: string;
  done!: boolean;
  pages!: number;
  description!: string;
  author!: string;
  isArchived!: boolean;
  archivedBooks: Array<{name: string, description: string, pages: number, author: string, isArchived: boolean, done: boolean}> = [];
  books: Book[] = [];

  constructor(protected bookService: BookService){
    this.books = this.bookService.getBooks();
  }

  addBook(): void {
    this.books.push(new Book(this.name, this.done, this.pages, this.description, this.author, this.isArchived))
    this.clearBook();  
  }

  clearBook(): void {
      this.name = '';
      this.pages = 0;
      this.description = '';
      this.author = '';
  }

  Remaining() {
    var count = 0;
    this.books.forEach(books => {
      count += books.done ? 0 : 1;
    });
    return count;
  }
      
  Archive(book: Book) {
    const index = this.books.indexOf(book);
    if (index >= 0) {
      // this.books.splice(index, 1);
      this.archivedBooks.push(book);
      book.isArchived = true;
      book.done = true;
    }
  }

  Unarchive(book: Book) {
    const index = this.archivedBooks.indexOf(book);
    if (index >= 0) {
      // this.archivedBooks.splice(index, 1);
      // this.books.push(book);
      book.done = false;
      book.isArchived = false;
    }
  }

  Delete(book: Book) {
    const index = this.books.indexOf(book);
    if (index >= 0) {
      this.books.splice(index, 1);
    }
  }
}
