import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, FormBuilder} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExpandableListItemComponent } from './expandable-list-item/expandable-list-item.component';
import { MytripsComponent } from './mytrips/mytrips.component';
import {MytripsService} from "./mytrips/mytrips.service";
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from "./profile/profile.service";
import {REACTIVE_DRIVEN_DIRECTIVES} from "@angular/forms/src/directives";
import { MaterialModule } from '@angular/material';
import { CabsComponent } from './cabs/cabs.component';

import {AgmCoreModule, GoogleMapsAPIWrapper} from 'angular2-google-maps/core';
import { CustomMapsComponent } from './custom-maps/custom-maps.component';
import {RatingModule} from "ng2-rating";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routes";
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpandableListItemComponent,
    MytripsComponent,
    REACTIVE_DRIVEN_DIRECTIVES,
    ProfileComponent,
    CabsComponent,
    CustomMapsComponent,
    HomeComponent,
    UserComponent,
  ],
  imports: [
    routing,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCb3dFx8D7ZrgsFlyzrDkVwuGT_TxMR3mU',
      libraries: ['places']
    }),
    RatingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MytripsService,ProfileService,FormBuilder,GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
