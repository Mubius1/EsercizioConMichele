import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../models/Book';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() books!:Book[];
  @Output() deleteBookEvent = new EventEmitter<Book>();
  @Output() deleteAllBooksEvent = new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteBook(book: Book){
    this.deleteBookEvent.emit(book);
  }
  deleteAllBooks(book:Book){
    this.deleteAllBooksEvent.emit(book)
  }
  stampa(){
    console.log("ciao")
  }

}

