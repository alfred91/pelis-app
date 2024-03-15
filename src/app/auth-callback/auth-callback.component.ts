// auth-callback.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-auth-callback',
  template: `<p>Autenticando...</p>`,
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
    private router: Router
  ) {}

  // REDIRECCION A LA PAGINA CUANDO SE OBTIENE EL TOKEN
  ngOnInit(): void {
    const requestToken = this.route.snapshot.queryParams['request_token'];
    if (requestToken) {
      this.tmdbService.createSession(requestToken).subscribe((sessionData) => {
        localStorage.setItem('sessionId', sessionData.session_id);
        this.router.navigate(['/home']);
      });
    }
  }
}
