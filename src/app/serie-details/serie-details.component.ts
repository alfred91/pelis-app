import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css'],
})
export class SerieDetailsComponent implements OnInit {
  serie: any;

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {}

  ngOnInit(): void {
    const serieId = this.route.snapshot.paramMap.get('id');
    if (serieId) {
      this.tmdbService.getSerieDetails(+serieId).subscribe((data) => {
        this.serie = data;
      });
    }
  }
}
