import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WeatherDetails } from '../../models/weather-details.model';
import { MatTableModule } from '@angular/material/table'
import { WeatherService } from '../../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [HeaderComponent, MatTableModule],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.scss'
})
export class WeatherPageComponent implements OnInit {
  /** Weather details to be displayed */
  weatherDetails!: WeatherDetails;

  /** Table columns to be displayed */
  displayedColumns: string[] = ['date', 'temperature', 'description', 'main', 'pressure', 'humidity'];

  /** Data to be displayed in the table details */
  dataSource!: any[];

  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) {
    // This is intentional
  }

  ngOnInit(): void {
    this.setWeatherDetails();
    this.dataSource = [this.weatherDetails];
  }

  /** Set the value for the weatherDetails */
  setWeatherDetails(): void {
    this.weatherDetails = this.weatherService.getWeatherDetails();
  }

  /** Triggers whenever the back button is clicked */
  backClicked(status: boolean) {
    if (status) {
      this.router.navigate(['home-page']);
    }
  }
}
