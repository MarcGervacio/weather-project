import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  constructor(
    private router: Router
  ) {
    // This is intentional
  }

  /** The name of the github user */
  name = '';

  /** The github link of the user's account */
  githubLink = '';

  ngOnInit(): void {
    this.name = 'sample name'
    this.githubLink = 'https://sample-github-link.com';
  }

  /** Triggers whenever the logout button is clicked */
  logoutClicked(status: boolean) {
    if (status) {
      this.router.navigate(['/landing-page']);
    }
  }
}
