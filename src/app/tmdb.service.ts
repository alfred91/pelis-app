import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey = 'fc407dec59510fcc0bc4885fe4b25792';
  private apiUrl = 'https://api.themoviedb.org/3';
  private searchQuerySource = new BehaviorSubject<string>('');
  currentSearchQuery = this.searchQuerySource.asObservable();

  constructor(private http: HttpClient) {}

  getRandomMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&language=es`); //AÑADIDO LENGUAJE ESPAÑOL
  }

  getAllMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=es`
    );
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}&language=es`
    );
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}&language=es`
    );
  }

  changeSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }
}
