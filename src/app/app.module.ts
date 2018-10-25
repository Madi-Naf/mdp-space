import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importation du module Router
import { RouterModule,Routes} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// importation du http client Modulr
import { HttpClientModule } from '@angular/common/http';
// importation du form Module
import { FormsModule } from '@angular/forms'
// Asteroid service
import { AsteroidService } from './services/asteroid.service';
// Name format class
import { NameFormatPipe } from './pipes/name-format.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsDateComponent } from './components/forms-date/forms-date.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AsteroidComponent } from './components/asteroid/asteroid.component';
import { AsteroidDetailComponent } from './components/asteroid-detail/asteroid-detail.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { AboutComponent } from './components/about/about.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'documentation', component: DocumentationComponent},
  { path: 'about', component: AboutComponent}

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
    AsteroidDetailComponent,
    DocumentationComponent,
    AboutComponent,
    NameFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule
  ],
  providers: [AsteroidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
