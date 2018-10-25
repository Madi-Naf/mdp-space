import { Component, OnInit } from '@angular/core';

import { AsteroidService } from 'src/app/services/asteroid.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeGoHome: boolean = true;
  public greatUser:string = "Welcome to mdpSpace";
  public formsDate = false;
  public hiddeenClass:string ;

  public elementCount: number; 
  public date: any = Date.now();
  


  constructor(private param_service: AsteroidService) { 

  }

  ngOnInit() {
    this.date = this.formatDate(this.date);
    return this.param_service.getResults(this.date, this.date).subscribe(
      (data) => {
        this.elementCount = data['element_count'];
      }
    )
  }

  getFormsDate(): void {
    this.formsDate = true;
    this.hiddeenClass = "visibility-hidden";
  }

  formatDate(date) {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

}
