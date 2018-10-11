import { Component, OnInit } from '@angular/core';
import { FormsDateComponent } from '../components/forms-date/forms-date.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public greatUser:string = "Welcome to mdpSpace";
  public formsDate = false;

  public hiddeenClass:string ;

  constructor() { 

  }

  ngOnInit() {
  }

  getFormsDate(): void {
    this.formsDate = true;
    this.hiddeenClass = "visibility-hidden";
  }

}
