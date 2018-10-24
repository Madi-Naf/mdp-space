import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient} from "@angular/common/http";

import { Results, Details, AsteroidId, AsteroidInfo, AllAsteroid, AllIds, MyId } from "../asteroid-info";
import { API_KEY, API_URL, startDate, endDate, SELF_URL, selfId } from "../api-params";


@Injectable({
  providedIn: 'root'
})
export class AsteroidService {

	private serviceHttp: HttpClient;

	constructor(private http: HttpClient) {
	  this.serviceHttp = http;
	}

	// ===========================================================



	public getResults(startDate: string, endDate: string): Observable<Results> {
		return this.serviceHttp
			.get<Results>('https://api.nasa.gov/neo/rest/v1/feed?', {
				params:
					{ 'start_date': startDate, 'end_date': endDate, 'api_key': 'kfZxQxzj00SlzYvCHUZtTvlhD1XsccCxgW2LPwDd' }
			});
	}

	public getDetails(link: string): Observable<Details> {
		return this.serviceHttp
			.get<Details>(link)
	}


// ===========================================================

	//   private apiUrl: string = `${API_URL}start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY }`;
	private selfUrl: string = `${SELF_URL}${selfId}?api_key=${API_KEY}`;
//  Get all Asteroid of the day 
public getAllAsteroidDay(start:string, end:string): Observable<AllIds> { 

	let apiUrlDay: string = `${API_URL}
			start_date=2018-10-19&end_date=2018-10-19&api_key=${API_KEY }`;

	return this.serviceHttp.get(apiUrlDay).pipe(
		map(
		(data: any) =>{
			let astero: AllIds = new AllIds();   
			astero.nbAstero = data.element_count ;
		
			return astero;
		
		})
	)
}
//  Get all Asteroid id and name
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
				let idTab = [];
				let nameTab = [];

				for(let i = 0; i < 12; i += 1){
					nameTab[i] = data.near_earth_objects['2018-09-11'][i].name; 
					idTab[i] = data.near_earth_objects['2018-09-11'][i].id; 
				}
				astero.asteroName = nameTab;
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

					info.deltaDistanceKm = data.close_approach_data[0]['miss_distance']['kilometers'];

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
