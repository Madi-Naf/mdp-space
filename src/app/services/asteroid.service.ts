import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient} from "@angular/common/http";

import { Results, Details } from "../asteroid-info";
import { API_KEY, API_URL } from "../api-params";


@Injectable({
  providedIn: 'root'
})

export class AsteroidService {

	private serviceHttp: HttpClient;

	constructor(private http: HttpClient) {
	  this.serviceHttp = http;
	}

	// Requête pour récupérer la liste et certains détails des astéroïdes en fonction d'une plage de date
	public getResults(startDate: string, endDate: string): Observable<Results> {
		return this.serviceHttp
			.get<Results>(API_URL, {
				params:
					{ 'start_date': startDate, 'end_date': endDate, 'api_key': API_KEY }
			});
	}

	// Requête pour récupérer les détails pour chaque astéroïde en fonction de son lien
	public getDetails(link): Observable<Details> {
		return this.serviceHttp
			.get<Details>(link.link)
	}


}