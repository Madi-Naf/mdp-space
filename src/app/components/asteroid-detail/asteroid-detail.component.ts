import { Component, OnInit, Input } from '@angular/core';

import { AsteroidService } from "src/app/services/asteroid.service";
import { Details } from 'src/app/asteroid-info';
@Component({
	selector: 'asteroid-detail',
	templateUrl: './asteroid-detail.component.html',
	styleUrls: ['./asteroid-detail.component.css']
})
export class AsteroidDetailComponent implements OnInit {
	@Input() link: string;
	@Input() startDate: string;
	@Input() endDate: string;

	public index: number;
	public hazardousClass: string;
	public hazardousMessage: string;

	public selectedDiamMin: number;
	public selectedDiamMax: number;
	public selectedVelocity: string;
	public selectedMissDistance: string;
	

	public arrayCloseDates = new Array();
	public details: Details;
	
    constructor(private param_service: AsteroidService) {}

    ngOnInit() {
	// Asteroid information / identity
		this.param_service.getDetails(this.link).subscribe(
			(info) => {

			// fonction pour retrouver la date d'approche correspondant à une des dates choisies par l'utilisateur
				function findDateIndex(): number{
					let idx: number = 0;
					// closeDateCount contient le nombre total des dates
					let closeDateCount: number = info['close_approach_data'].length;

					for(let i = 0; i < closeDateCount; i += 1){
						if (info['orbital_data']['last_observation_date'] === 
							info['close_approach_data'][i]['close_approach_date']){
								idx = i;
							}
					}
					return idx ;
				}

				this.index = findDateIndex();

			//  Affectation des caracteristiques des asteroides
				this.details = {
					name: 					  info['name'],
					id: 					  info['id'],

					description: 			  info['orbital_data']['orbit_class']['orbit_class_description'],
					hazardous:				  info['is_potentially_hazardous_asteroid'],

					first_observation_date:   info['orbital_data']['first_observation_date'],
					last_observation_date: 	  info['orbital_data']['last_observation_date'],

					diameter_feet_max: 		  info['estimated_diameter']['feet']['estimated_diameter_max'],
					diameter_feet_min: 		  info['estimated_diameter']['feet']['estimated_diameter_min'],
					diameter_miles_max: 	  info['estimated_diameter']['miles']['estimated_diameter_max'],
					diameter_miles_min: 	  info['estimated_diameter']['miles']['estimated_diameter_min'],
					diameter_meters_max: 	  info['estimated_diameter']['meters']['estimated_diameter_max'],
					diameter_meters_min: 	  info['estimated_diameter']['meters']['estimated_diameter_min'],
					diameter_kilometers_max:  info['estimated_diameter']['kilometers']['estimated_diameter_max'],
					diameter_kilometers_min:  info['estimated_diameter']['kilometers']['estimated_diameter_min'],
					
					velocity_kilometers_sec:  info['close_approach_data'][this.index]['relative_velocity']['kilometers_per_second'],
					velocity_kilometers_hour: info['close_approach_data'][this.index]['relative_velocity']['kilometers_per_hour'],
					velocity_miles_hour: 	  info['close_approach_data'][this.index]['relative_velocity']['miles_per_hour'],
					
					miss_astronomical:     	  info['close_approach_data'][this.index]['miss_distance']['astronomical'],
					miss_lunar:				  info['close_approach_data'][this.index]['miss_distance']['lunar'],
					miss_kilometers: 		  info['close_approach_data'][this.index]['miss_distance']['kilometers'],
					miss_miles: 			  info['close_approach_data'][this.index]['miss_distance']['miles'],
					
					orbiting_body: 			  info['close_approach_data'][this.index]['orbiting_body']
				}

			//  Affectatrion des valeur sur les variables de selectoin
				this.selectedDiamMin  = this.details.diameter_kilometers_min;
				this.selectedDiamMax  = this.details.diameter_kilometers_max;
				this.selectedVelocity =  this.details.velocity_kilometers_hour;
			
			//	Mise en valeur de la dangereusité d'un asteroid
				if(this.details.hazardous){
					this.hazardousClass = "degerous list-group-item feature"; 
					this.hazardousMessage = "This asteroid is potentially hazardous"; 
				}else{
					this.hazardousClass = "no-degerous list-group-item feature"; 
					this.hazardousMessage = "This Asteroid is not hazardous"; 
				}

		});
    }

  	//  Methode de Selection des unités des diametre 
	public selectUnitMin(event: any){
		//changement d'unité
		if( event.target.value == '1'){
			return this.selectedDiamMin = this.details.diameter_kilometers_min;
		}else if(event.target.value == '2'){
			return this.selectedDiamMin = this.details.diameter_meters_min;
		}else if(event.target.value == '3'){
			return this.selectedDiamMin = this.details.diameter_miles_min;
		}
	}
 
	public selectUnitMax(event: any){
		//changement d'unité
		if( event.target.value == '1'){
			return this.selectedDiamMax = this.details.diameter_kilometers_max;
		}else if(event.target.value == '2'){
			return this.selectedDiamMax = this.details.diameter_meters_max;
		}else if(event.target.value == '3'){
			return this.selectedDiamMax = this.details.diameter_miles_max;
		}
	}

	//  Methode de Selection des unités de la velocité
	public selectVelocity(event: any){
		//changement d'unité
		if( event.target.value == '1'){
			return this.selectedVelocity = this.details.velocity_kilometers_hour;
		}else if(event.target.value == '2'){
			return this.selectedVelocity = this.details.velocity_kilometers_sec;
		}else if(event.target.value == '3'){
			return this.selectedVelocity = this.details.velocity_miles_hour;
		} 
	}

	//  Methode de Selection des unités de la distance d'approche par rapport à la terre 
	public selectMissDistance(event: any){
		if( event.target.value == '1'){
			return this.selectedMissDistance = this.details.miss_kilometers;
		}else if(event.target.value == '2'){
			return this.selectedMissDistance = this.details.miss_miles;
		}else if(event.target.value == '3'){
			return this.selectedMissDistance = this.details.miss_astronomical;
		}else if(event.target.value == '4'){
			return this.selectedMissDistance = this.details.miss_lunar;
		}
	}

}




