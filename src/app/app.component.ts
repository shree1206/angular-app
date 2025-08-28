import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  ngOnInit() {
    const apiUrl = environment.apiUrl;
    if (environment.production) {
      console.log(environment.mode)
    } else {
      console.log(environment.mode)
    }
  }
}
