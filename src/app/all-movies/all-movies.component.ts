import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
})
export class AllMoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getAllMovies().subscribe((data) => {
      this.movies = data.results; // Asegúrate de ajustar esto según la estructura de los datos de la API
    });
  }
}
