import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Book } from '../models/Book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  @ViewChild('mioForm') form!:any;
  @Output() createBookEvent = new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  }

  generi: String [] = [
    'Avventura e Azione',
    "Biografia e Autobiografia",
    'Horror',
    'Fantasy',
    'Fantascienza',
    'Giallo',
    "Romanzo Storico",
    'Thriller',
    'Umoristico'
  ]
  submitform(){
   console.log(this.form);
   this.createBookEvent.emit(this.form.value);
  }
}

