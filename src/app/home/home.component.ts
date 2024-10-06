import { TmdbService } from '../tmdb.service';
import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('2000ms ease-out', style({ opacity: 1 }))]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getAllMovies().subscribe(
      (data) => {
        if (data && data.results) {
          this.movies = data.results.slice(0, 16);
        } else {
          console.error(
            'La respuesta del servidor es null o no contiene la propiedad results'
          );
        }
      },
      (error) => {
        console.error('Error al obtener películas:', error);
      }
    );
  }

  // Método para determinar el color del círculo de la nota basado en el valor de la nota
  getRatingColor(vote_average: number): string {
    if (vote_average >= 8) {
      return '#4CAF50'; // Verde para notas altas
    } else if (vote_average >= 5) {
      return '#FFC107'; // Amarillo para notas medias
    } else {
      return '#F44336'; // Rojo para notas bajas
    }
  }
}
