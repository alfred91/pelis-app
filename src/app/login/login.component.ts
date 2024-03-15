// login.component.ts
import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private tmdbService: TmdbService) {}

  login(): void {
    this.tmdbService.getRequestToken().subscribe((response) => {
      window.location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:4200/auth-callback`;
    });
  }
}