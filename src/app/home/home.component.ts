import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public greatUser:string = "Welcome to mdpSpace";
  public formsDate:string;
  constructor() { 

  }

  ngOnInit() {
  }

  getFormsDate(): void {
    this.formsDate = `forms-date`;
  }

}
