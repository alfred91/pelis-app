import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor(private tmdbService: TmdbService) {}

  // UTILIZA TMDBSERVICE PARA AUTENTICAR AL USUARIO
  login(): void {
    this.tmdbService.getRequestToken().subscribe((response) => {
      window.location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:4200/auth-callback`;
    });
  }
}
