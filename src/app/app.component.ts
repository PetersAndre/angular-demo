import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-demo';
}
