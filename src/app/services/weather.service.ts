import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherDetails } from '../models/weather-details.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  cityDetails!: any;

  constructor(
    private router: Router
  ) { }

  getWeatherDetails(): WeatherDetails {
    try {
      this.cityDetails = JSON.parse(sessionStorage.getItem('city-name') || '');
    } catch (e) {
      this.router.navigate(['landing-page']);
    }

    return {
      cityName: this.cityDetails.city,
      date: new Date(),
      temperature: '299.86',
      description: 'Sunny',
      main: '288.73',
      pressure: '1017',
      humidity: '44'
    };
  }
}
