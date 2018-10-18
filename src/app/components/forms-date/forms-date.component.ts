import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-date',
  templateUrl: './forms-date.component.html',
  styleUrls: ['./forms-date.component.css']
})
export class FormsDateComponent implements OnInit {

  private seeAsteroid: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  public canSeeAsteroid(): boolean{
    return this.seeAsteroid = true;
  }
} 
