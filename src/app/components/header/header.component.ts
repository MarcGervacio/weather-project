import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  /** Indicated whether to have the logout button */
  @Input() shouldHaveLogout = false;

  /**Indicated whether to have the back button */
  @Input() shouldHaveBack = false;

  /** Event emitter whenever logout button is clicked */
  @Output() logoutClickEvent = new EventEmitter<boolean>();

  /** Evemt emitter whenever back button is clicked */
  @Output() backClickEvent = new EventEmitter<boolean>();

  /** Triggers whenever the logout button is clicked */
  logoutClicked() {
    this.logoutClickEvent.emit(true);
  }

  /** Triggers whenever the back button is clicked */
  backClicked() {
    this.backClickEvent.emit(true);
  }
}
