import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  /** Set the value for the user details */
  userDetails!: any;

  /** The name of the github user */
  name = '';

  /** The email address of the user's account */
  emailAddress = '';

  /** FormControl for the city input */
  city = new FormControl('');

  constructor(
    private router: Router
  ) {
    // This is intentional
  }

  ngOnInit(): void {
    try {
      this.userDetails = JSON.parse(sessionStorage.getItem('user-details') || '');
    } catch (e: any) {
      this.router.navigate(['landing-page']);
    }

    this.name = this.userDetails.username;
    this.emailAddress = 'https://' + this.userDetails.email;
  }

  /** Triggers whenever the logout button is clicked */
  logoutClicked(status: boolean) {
    if (status) {
      sessionStorage.clear();
      this.router.navigate(['/landing-page']);
    }
  }

  /** Trigger whenever the display weather button is clicked */
  displayWeatherClicked() {
    if (!['', null, undefined].includes(this.city.value)) {
      sessionStorage.setItem('city-name', JSON.stringify({
        city: this.city.value
      }));
      this.router.navigate(['weather-page']);
    }
  }
}
