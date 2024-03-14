import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  searchQuery: string = '';

  constructor(private tmdbService: TmdbService, private router: Router) {} // Inyecta Router aquí

  searchMovies(): void {
    this.tmdbService.changeSearchQuery(this.searchQuery); // Cambia el término de búsqueda usando el servicio
    this.router.navigate(['/search-movies']); // Navega al componente de búsqueda de películas
  }
}
