import { component } from './material';
import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './portfolio/home/home.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { NavbarComponent } from './portfolio/navbar/navbar.component';
import { WorkComponent } from './portfolio/work/work.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ContactComponent,
    NavbarComponent,
    WorkComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    component,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
