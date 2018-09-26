import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FitnessTracker';
  isOpened: boolean = false;

  toggleSideNav() {
    this.isOpened = !this.isOpened;
  }
}
