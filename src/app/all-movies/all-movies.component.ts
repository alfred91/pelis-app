import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
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
      this.movies = data.results;
    });
  }

  // FUNCION PARA PONER EL COLOR EN FUNCION DEL VALOR DE LA NOTA DE LA PELICULA
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
