import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes,Router} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsDateComponent } from './components/forms-date/forms-date.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AsteroidComponent } from './components/asteroid/asteroid.component';
import { AsteroidDetailComponent } from './components/asteroid-detail/asteroid-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Contact', component: ContactComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,

    FooterComponent,
    ContactComponent,
    FormsDateComponent,
    AsteroidComponent,
    AsteroidDetailComponent   
    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
