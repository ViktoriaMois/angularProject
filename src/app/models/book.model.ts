export class Book{
    name: string;
    done: boolean;
    pages: number;
    description: string;
    author: string;
    isArchived: boolean;

    constructor  (name: string, done: boolean, pages: number, description: string, author: string, isArchived: boolean){
        this.name = name;
        this.done = done;
        this.pages = pages;
        this.description = description;
        this.author = author;
        this.isArchived = isArchived;
    }
    
}