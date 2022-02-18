import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  @ViewChild('mioForm') form!:any;
  constructor() { }

  ngOnInit(): void {
  }

  generi: String [] = [
    'horror',
    'fantasy',
    'giallo'
  ]
  submitform(){
   console.log(this.form.value)
  }
}

