import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  /** Determines whether the credentials entered are valid or not */
  isCredentialsValid = true;

  /** FormControl for the username input */
  email = new FormControl('');

  /** FormControl for the password input */
  password = new FormControl('');

  constructor(
    private router: Router
  ) {
    // This is intentional
  }

  /** Trigger when login button is clicked */
  loginClick(): void {
    this.validateCredentials();
  }

  /** Validates if credentials entered are valid
   * Valid credentials includes a _@_._ email format and a truthy password value
  */
  validateCredentials(): void {
    if (!['', null, undefined].includes(this.email.value) && !['', null, undefined].includes(this.password.value)) {
      if ((this.email.value!.split('@')).length > 1) {
        let firstEmailValue = (this.email.value!.split('@'))[1];
        if ((firstEmailValue!.split('.')).length > 1) {
          sessionStorage.setItem('user-details', JSON.stringify({
            username: (this.email.value!.split('@'))[0],
            email: this.email.value
          }))
          this.isCredentialsValid = true;
          this.router.navigate(['/home-page']);
        } else {
          this.isCredentialsValid = false;
          this.email.setValue('');
          this.password.setValue('');
        }
      } else {
        this.isCredentialsValid = false;
        this.email.setValue('');
        this.password.setValue('');
      }
    } else {
      this.isCredentialsValid = false;
      this.email.setValue('');
      this.password.setValue('');
    }
  }
}
