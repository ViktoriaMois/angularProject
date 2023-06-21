import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): Book[] {
      return[
        new Book('The Time Machine', false, 84, 'The Time Machine is a post-apocalyptic science fiction novella by H. G. Wells, published in 1895. The work is generally credited with the popularization of the concept of time travel by using a vehicle or device to travel purposely and selectively forward or backward through time. The term "time machine", coined by Wells, is now almost universally used to refer to such a vehicle or device.', 'Herbert George Wells', false),
        new Book('The Picture of Dorian Gray', true, 230, 'The Picture of Dorian Gray is a philosophical novel by Irish writer Oscar Wilde. A shorter novella-length version was published in the July 1890 issue of the American periodical Lippincotts Monthly Magazine. The novel-length version was published in April 1891.', 'Oscar Wilde' , true),
        new Book('Brave New World', false, 311, 'A dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by the storys protagonist.', 'Aldous Huxley', false) 
    ]
  }
}
