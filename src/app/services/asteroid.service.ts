import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient} from "@angular/common/http";

import { AsteroidId, AsteroidInfo, AllAsteroid, AllIds, MyId } from "../asteroid-info";
import { API_KEY, API_URL, startDate, endDate, SELF_URL, selfId } from "../api-params";
@Injectable({
  providedIn: 'root'
})
export class AsteroidService {

	private serviceHttp: HttpClient;

	constructor(private http: HttpClient) {
	  this.serviceHttp = http;
	}

	//   private apiUrl: string = `${API_URL}start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY }`;
	private selfUrl: string = `${SELF_URL}${selfId}?api_key=${API_KEY}`;

	public getAllAsteroid(start:string, end:string): Observable<AllIds> { 

	let apiUrl: string = `${API_URL}
			start_date=${start}
			&end_date=${end}
			&api_key=${API_KEY }`;

	return this.serviceHttp.get(apiUrl).pipe(
		map(
		(data: any) =>{
			let astero: AllIds = new AllIds();   
			astero.nbAstero = data.element_count ;
	
			// Recuperation des ID
			let idTab= [];
			for(let i = 0; i < 12; i += 1){

				idTab[i] = data.near_earth_objects['2018-09-11'][i].id; 
			}
			astero.idAstero = idTab;

			return astero;
		}
		)
	)
	}

	public getId():Observable<MyId> {
	let apiUrl: string = `${API_URL}start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY }`;
	return this.serviceHttp.get(apiUrl).pipe(
		map(
			(data: any) => {
				let info: MyId = new MyId();
				info.id = data.near_earth_objects['2018-09-11'][1]['id'];

				return info ;
			}
		)
	)
	}

	public getAsteroidInfo():Observable<AsteroidInfo> {
	return this.serviceHttp.get(this.selfUrl).pipe(
		map(
		(data: any) => {
					let info: AsteroidInfo = new AsteroidInfo();
					info.id = data.id;
					info.name = data.name;
					info.hazardous = data.is_potentially_hazardous_asteroid;

					// Estimated diameter ( Je recupere les diametre maxi et mini pour trois unité de mesure differentes)
					info.minMeters =
					data.estimated_diameter["meters"]["estimated_diameter_min"];
					info.maxMeters =
					data.estimated_diameter["meters"]["estimated_diameter_max"];

					info.minKm =
					data.estimated_diameter["kilometers"]["estimated_diameter_min"];
					info.maxKm =
					data.estimated_diameter["kilometers"]["estimated_diameter_max"];

					info.minMiles =
					data.estimated_diameter["miles"]["estimated_diameter_min"];
					info.maxMiles =
					data.estimated_diameter["miles"]["estimated_diameter_max"];

					//Comme pour chaque date de passage il y'a une vitesse, je prends le nombre de fois de passage
					info.approchTime = data.close_approach_data.length;
					let indexDate = 0;
					let valideDate: boolean = false;

					// Je parcours le nombre de passage pour chaque date je compare la date c'est elle est égale à la date choisi
					while (valideDate == false) {
					if (
						data.close_approach_data[indexDate]["close_approach_date"] ==
						"2018-09-11"
					) {
						info.velocityKmh =
						data.close_approach_data[indexDate]["relative_velocity"][
							"kilometers_per_hour"
						];
						info.velocityKms =
						data.close_approach_data[indexDate]["relative_velocity"][
							"kilometers_per_second"
						];
						info.velocityMilesh =
						data.close_approach_data[indexDate]["relative_velocity"][
							"miles_per_hour"
						];
						//Quand j'ai trouver la date que je veux je recupe les donnée et je sors de la boucle
						valideDate = true;
					}
					indexDate += 1;
					}

					return info; 


		}
		)
	);
	}
}
