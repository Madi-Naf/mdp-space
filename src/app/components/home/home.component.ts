import { Component, OnInit } from '@angular/core';

import { AsteroidService } from 'src/app/services/asteroid.service';
import { AllAsteroid, AllIds} from 'src/app/asteroid-info';
import {startDate, endDate} from 'src/app/api-params';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public greatUser:string = "Welcome to mdpSpace";
  public formsDate = false;
  public hiddeenClass:string ;

  public allAsteroid: AllAsteroid;

  constructor(private param_service: AsteroidService) { 

  }

  ngOnInit() {
  
  }

  getFormsDate(): void {
    this.formsDate = true;
    this.hiddeenClass = "visibility-hidden";
  }

}
