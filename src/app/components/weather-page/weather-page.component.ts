import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WeatherDetails } from '../../models/weather-details.model';
import { MatTableModule } from '@angular/material/table'

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

  ngOnInit(): void {
    this.setWeatherDetails();
    this.dataSource = [this.weatherDetails];
  }

  /** Set the value for the weatherDetails */
  setWeatherDetails(): void {
    this.weatherDetails = {
      cityName: 'Sample City',
      date: new Date(),
      temperature: 'Sample Temperature',
      description: 'Sample Description',
      main: 'Sample Main',
      pressure: 'Sample Pressure',
      humidity: 'Sample Humidity'
    }
  }
}
