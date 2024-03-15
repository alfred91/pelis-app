import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
})
export class SearchMoviesComponent implements OnInit {
  searchResults: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.currentSearchQuery.subscribe((query) => {
      if (query) {
        this.onSearch(query);
      }
    });
  }

  // BÚSQUEDA DE PELÍCULAS UTILIZANDO TMDBSERVICE Y LA CONSULTA
  onSearch(query: string): void {
    this.tmdbService.searchMovies(query).subscribe(
      (data) => {
        this.searchResults = data.results;
      },
      (error) => {
        console.error('ERROR AL BUSCAR PELÍCULAS:', error);
      }
    );
  }
}
