import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): Book[] {
      return[
        new Book('The Time Machine', true, 84, 'The Time Machine is a post-apocalyptic science fiction novella by H. G. Wells, published in 1895. The work is generally credited with the popularization of the concept of time travel by using a vehicle or device to travel purposely and selectively forward or backward through time. The term "time machine", coined by Wells, is now almost universally used to refer to such a vehicle or device.', 'Herbert George Wells', true),
        new Book('The Picture of Dorian Gray', true, 230, 'The Picture of Dorian Gray is a philosophical novel by Irish writer Oscar Wilde. A shorter novella-length version was published in the July 1890 issue of the American periodical Lippincotts Monthly Magazine. The novel-length version was published in April 1891.', 'Oscar Wilde' , true),
        new Book('Alices Adventures in Wonderland', false, 161, 'An 1865 English childrens novel by Lewis Carroll, a mathematics don at Oxford University. It details the story of a young girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures. It is seen as an example of the literary nonsense genre. The artist John Tenniel provided 42 wood-engraved illustrations for the book.', 'Lewis Carroll', false),
        new Book('The Trial', false, 286, 'a novel written by Franz Kafka in 1914 and 1915 and published posthumously on 26 April 1925. One of his best known works, it tells the story of Josef K., a man arrested and prosecuted by a remote, inaccessible authority, with the nature of his crime revealed neither to him nor to the reader. Heavily influenced by Dostoevskys Crime and Punishment and The Brothers Karamazov, Kafka even went so far as to call Dostoevsky a blood relative. Like Kafkas two other novels, The Castle and Amerika, The Trial was never completed, although it does include a chapter which appears to bring the story to an intentionally abrupt ending.', 'Franz Kafka', false),
        new Book('Brave New World', true, 311, 'A dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by the storys protagonist.', 'Aldous Huxley', true),
        new Book('Animal Farm', false, 320, 'Animal Farm is a beast fable,[1] in the form of a satirical allegorical novella, by George Orwell, first published in England on 17 August 1945.[2][3] It tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, the rebellion is betrayed, and under the dictatorship of a pig named Napoleon, the farm ends up in a state as bad as it was before.', 'George Orwell', false) 
    ]
  }
}
