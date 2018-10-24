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

	public getResults(startDate: string, endDate: string): Observable<Results> {
		return this.serviceHttp
			.get<Results>(API_URL, {
				params:
					{ 'start_date': startDate, 'end_date': endDate, 'api_key': API_KEY }
			});
	}

	public getDetails(link: string): Observable<Details> {
		return this.serviceHttp
			.get<Details>(link)
	}

}