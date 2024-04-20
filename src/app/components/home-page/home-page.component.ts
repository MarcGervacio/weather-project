import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  /** The name of the github user */
  name = '';

  /** The github link of the user's account */
  githubLink = '';

  ngOnInit(): void {
    this.name = 'sample name'
    this.githubLink = 'https://sample-github-link.com';
  }
}
