import { Component, OnInit, Input } from '@angular/core';

import { AsteroidService } from "src/app/services/asteroid.service";
import { AsteroidIdentity, AsteroidInfo, AsteroidId } from "src/app/asteroid-info";
@Component({
  selector: 'asteroid-detail',
  templateUrl: './asteroid-detail.component.html',
  styleUrls: ['./asteroid-detail.component.css']
})
export class AsteroidDetailComponent implements OnInit {

    @Input() idIs: AsteroidId;
    
    public asteroInfo: AsteroidIdentity;

    constructor(private param_service: AsteroidService) {}

    ngOnInit() {
    // Asteroid information / identity
    this.param_service.getAsteroidInfo().subscribe(
        ( info:AsteroidInfo) => {
        this.asteroInfo = info;
        }
    );
  }

}
