import { Component, OnInit } from '@angular/core';

import { AsteroidService } from 'src/app/services/asteroid.service';
import { AllAsteroid, AllIds, MyId, AsteroidId} from 'src/app/asteroid-info';
import {startDate, endDate, selfId } from 'src/app/api-params';
@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.css']
})
export class AsteroidComponent implements OnInit {

  public card: boolean = false; 

  public oneId: AsteroidId;

  public allAsteroid: AllAsteroid;
  startDate = '2018-01-10';
  endDate = '2018-01-13';
  
    constructor(private param_service: AsteroidService) {}
    
    public ngOnInit(): void {
    // get one id 
    this.param_service.getId().subscribe(
        (info: MyId) => {
            this.oneId = info;
        }
    ) 
    // All Asteroid List
    this.param_service.getAllAsteroid(startDate, endDate).subscribe(
        ( info: AllIds) => {
            this.allAsteroid = info;
        }
    ); 

    }
    // get a card
    public getCard(id): boolean{
    this.oneId.id = id;
    return this.card = true;
    }

}
