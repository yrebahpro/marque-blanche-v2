import { Routes } from '@angular/router';
import { HomeRouteComponent } from '../routes/home-route/home-route.component';

export const routes: Routes = [
    { path: '**', component: HomeRouteComponent }
];
