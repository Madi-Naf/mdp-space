import { Component, OnInit, Input } from '@angular/core';

import { AsteroidService } from 'src/app/services/asteroid.service';
import { Results,  AllAsteroid, AllIds, MyId, AsteroidId} from 'src/app/asteroid-info';
import {startDate, endDate, selfId } from 'src/app/api-params';
@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.css']
})
export class AsteroidComponent implements OnInit {

    public card: boolean = false; 

    @Input() startDate: string;
    @Input() endDate: string;  
  
    constructor(private param_service: AsteroidService) {}

    // arrayInfos : destiné à recevoir les infos qui nous intéressent
    public arrayInfos = new Array();
    // Pour chaque astéroïdes
    public results: Results;
    // allAstrds : nombre d'astéroïdes pour la période
    public allAstrds: number;
    // dateAstrds : nombre d'astéroïdes pour un jour
    public dateAstrds: number
    
    public ngOnInit(): void {
        this.param_service.getResults(this.startDate, this.endDate)
            .subscribe(
                (data) => {
                    // Nombre d'astéroïdes pour la période donnée
                    this.allAstrds = data['element_count'];
                    // Pour chaque date des données
                    for (let day in data['near_earth_objects']) {
                        // J'assigne le nombre d'astéroïdes de ce jour dans une variable        
                        this.dateAstrds = data['near_earth_objects'][day].length;
                        let j = 0;
                        // Pour chaque astéroïde de ce jour
                        for (let i = 0; i < this.dateAstrds; i++) {
                            // J'assigne un objet composé du nom, de l'ID et du lien de l'astéroïde à une variable
                            this.results = {
                                name: data['near_earth_objects'][day][i]['name'],
                                id: data['near_earth_objects'][day][i]['id'],
                                link: data['near_earth_objects'][day][i]['links']['self']
                            };
                            // J'ajoute cette objet au tableau d'informations
                            this.arrayInfos.push(this.results);

                        }
                    };
                }
            )


    }
    // get a card
    public getCard(id): boolean {
    return this.card = true;
    }

}
