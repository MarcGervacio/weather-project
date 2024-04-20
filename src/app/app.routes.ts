import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    { path: '', component: WeatherPageComponent },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'weather-page', component: WeatherPageComponent }
];
