// Importation de Input pour récupérer des données d'un élément parent
import { Component, OnInit, Input } from '@angular/core';
// Importation du service Asteroid
import { AsteroidService } from 'src/app/services/asteroid.service';
// Importation de la classe Results
import { Results } from 'src/app/asteroid-info';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.css']
})

export class AsteroidComponent implements OnInit {

    // Création d'une propriété card, false par défaut
    public card: boolean = false; 

    // Récupération des dates transmises par l'élément parent FormsDateComponent
    @Input() startDate: string;
    @Input() endDate: string;  

    public shareLink: string;
  
    constructor(private param_service: AsteroidService) { }

    // Propriété arrayInfos : destiné à recevoir les infos qui nous intéressent
    public arrayInfos = new Array();
    // Propriété Results qui récupère des informations pour chaque astéroïde
    public results: Results;
    // Propriété allAstrds : nombre d'astéroïdes pour la période
    public allAstrds: number;
    // Propriété dateAstrds : nombre d'astéroïdes pour un jour
    public dateAstrds: number
    
    // Méthode qui effectue une requête par le biais du service
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
    // Méthode qui passe la propriété card à true, pour afficher les détails
    public getCard(link): boolean {
        this.shareLink = link;
        console.log(this.shareLink);
        
        return this.card = true;
    }

}
