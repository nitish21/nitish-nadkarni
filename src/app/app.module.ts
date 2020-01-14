import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavbarComponent } from './Components/left-navbar/left-navbar.component';
import { ExperienceComponent } from './Components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
