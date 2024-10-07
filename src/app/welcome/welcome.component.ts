import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor(private tmdbService: TmdbService) {}

  // Utiliza TMDBService para autenticar al usuario
  login(): void {
    this.tmdbService.getRequestToken().subscribe((response) => {
      // Cambia la URL de redirección a tu aplicación en GitHub Pages
      const redirectUrl = 'https://alfred91.github.io/pelis-app/auth-callback';
      window.location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=${redirectUrl}`;
    });
  }
}
