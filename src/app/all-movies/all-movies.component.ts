import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service'; // Asegúrate de que la ruta sea correcta
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state(
        'default',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'hovered',
        style({
          transform: 'scale(1.1)',
        })
      ),
      transition('default <=> hovered', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class AllMoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getAllMovies().subscribe((data) => {
      this.movies = data.results; // Asegúrate de ajustar esto según la estructura de los datos de la API
    });
  }

  // Método para determinar el color del círculo de la nota basado en el valor de la nota
  getRatingColor(vote_average: number): string {
    if (vote_average > 7) {
      return '#4CAF50';
    } else if (vote_average > 5) {
      return '#FFC107';
    } else {
      return '#F44336';
    }
  }
}
