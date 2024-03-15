// auth-callback.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-auth-callback',
  template: `<p>Logeando..</p>`,
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, // PARAMETROS DE LA URL
    private tmdbService: TmdbService, // INTERACCIÓN CON LA API TMDB
    private router: Router // NAVEGACIÓN ENTRE PÁGINAS
  ) {}

  ngOnInit(): void {
    // OBTENER TOKEN DE LA URL
    const requestToken = this.route.snapshot.queryParams['request_token'];
    if (requestToken) {
      // CREAR SESIÓN CON EL TOKEN
      this.tmdbService.createSession(requestToken).subscribe((sessionData) => {
        // ALMACENAR SESSION ID EN LOCAL STORAGE
        localStorage.setItem('sessionId', sessionData.session_id);
        // NAVEGAR A LA PÁGINA DE INICIO
        this.router.navigate(['/home']);
      });
    }
  }
}
