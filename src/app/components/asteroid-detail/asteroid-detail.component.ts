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
			this.selectedDiamMin = this.asteroInfo.minKm;
			this.selectedDiamMax = this.asteroInfo.maxKm;
			this.selectedVelocity = this.asteroInfo.velocityKmh;

        	if(this.asteroInfo.hazardous){
            	this.hazardous = "degerous list-group-item feature";  
			}else{
				this.hazardous = "no-degerous list-group-item feature";  
			}
        });
    }

  	//  Methode de Selection des unités des diametre 
	public selectUnitMin(event: any){
		//changement d'unité
		if( event.target.value == '1'){
			return this.selectedDiamMin = this.asteroInfo.minKm;
		}else if(event.target.value == '2'){
			return this.selectedDiamMin = this.asteroInfo.minMeters;
		}else if(event.target.value == '3'){
			return this.selectedDiamMin = this.asteroInfo.minMiles;
		}
	}

	public selectUnitMax(event: any){
		//changement d'unité
		if( event.target.value == '1'){
			return this.selectedDiamMax = this.asteroInfo.maxKm;
		}else if(event.target.value == '2'){
			return this.selectedDiamMax = this.asteroInfo.maxMeters;
		}else if(event.target.value == '3'){
			return this.selectedDiamMax = this.asteroInfo.maxMiles;
		}
	}

	// //  Methode de Selection des unités de la velocité
	public selectVelocite(event: any){
		//changement d'unité
		if( event.target.value == '1'){
			return this.selectedVelocity = this.asteroInfo.velocityKmh;
		}else if(event.target.value == '2'){
			return this.selectedVelocity = this.asteroInfo.velocityKms;
		}else if(event.target.value == '3'){
			return this.selectedVelocity = this.asteroInfo.velocityMilesh;
		} */
	}


}
