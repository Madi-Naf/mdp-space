import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-date',
  templateUrl: './forms-date.component.html',
  styleUrls: ['./forms-date.component.css']
})
export class FormsDateComponent implements OnInit {

  // Dates par défaut
  public startDate = '2018-09-14';
  public endDate = '2018-09-15';
  

  public seeAsteroid: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  public canSeeAsteroid(): boolean{
    return this.seeAsteroid = true;
  }
} 
