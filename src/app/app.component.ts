// app.component.ts
import { Component } from '@angular/core';
import { TmdbService } from './tmdb.service'; // Asegúrate de que la ruta sea correcta

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
})
export class AppComponent {
 title = 'pelis-app';
 searchResults: any[] = []; // Añade esta propiedad

 constructor(private tmdbService: TmdbService) {}

 onSearch(query: string): void {
    this.tmdbService.searchMovies(query).subscribe(
      (data) => {
        this.searchResults = data.results; // Actualiza la propiedad con los resultados de la búsqueda
      },
      (error) => {
        console.error('Error al buscar películas:', error);
      }
    );
 }
}