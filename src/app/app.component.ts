import { Component } from '@angular/core';
import { TmdbService } from './tmdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pelis-app';
  searchResults: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  onSearch(query: string): void {
    this.tmdbService.searchMovies(query).subscribe(
      (data) => {
        this.searchResults = data.results;
      },
      (error) => {
        console.error('Error al buscar películas:', error);
      }
    );
  }
}
