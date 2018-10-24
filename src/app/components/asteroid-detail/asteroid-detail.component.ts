import { Component, OnInit, Input } from '@angular/core';

import { AsteroidService } from "src/app/services/asteroid.service";
@Component({
	selector: 'asteroid-detail',
	templateUrl: './asteroid-detail.component.html',
	styleUrls: ['./asteroid-detail.component.css']
})
export class AsteroidDetailComponent implements OnInit {


    constructor(private param_service: AsteroidService) {}

    ngOnInit() {
    // Asteroid information / identity
    /*this.param_service.getAsteroidInfo().subscribe(
        ( info:AsteroidInfo) => {
        this.asteroInfo = info;
        }
	); */
  }

}
