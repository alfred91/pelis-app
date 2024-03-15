import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  series: any[] = [];

  constructor(private tmdbService: TmdbService) {}
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
  ngOnInit(): void {
    this.tmdbService.getPopularTvShows().subscribe((data) => {
      this.series = data.results;
    });
  }
}
