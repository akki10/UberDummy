import { RouterModule, Routes } from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";

const APP_ROUTES=[
  { path: 'home' , component: HomeComponent},
  { path: 'user' , component: UserComponent },
  { path:'**' , redirectTo:'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
