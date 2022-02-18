import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercizioConMichele';
  formStatus: boolean = false;

  showForm(x: boolean){
    this.formStatus = x;
  }
}

