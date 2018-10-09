import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes,Router} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FormsDateComponent } from './components/forms-date/forms-date.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FormsDateComponent,
    FooterComponent
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
