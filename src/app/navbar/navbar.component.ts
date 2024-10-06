import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('linkAnimation', [
      state(
        'normal',
        style({
          color: 'white',
        })
      ),
      state(
        'highlighted',
        style({
          color: '#ff6060',
        })
      ),
      transition('normal <=> highlighted', animate('0.3s ease')),
    ]),
  ],
})
export class NavbarComponent {
  searchQuery: string = '';

  constructor(private tmdbService: TmdbService, private router: Router) {} // INYECTAMOS ROTUER PARA REDIRIGIR A LA PAGINA RESULTADOS CON LOS RESULTADOS

  searchMovies(): void {
    this.tmdbService.changeSearchQuery(this.searchQuery);
    this.router.navigate(['/search-movies']); // AQUI LO HACEMOS
  }
}
