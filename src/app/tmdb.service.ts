import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

// LLAMADAS A LA API THEMOVIEDB
@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey = 'fc407dec59510fcc0bc4885fe4b25792';
  private apiUrl = 'https://api.themoviedb.org/3';
  private searchQuerySource = new BehaviorSubject<string>('');
  currentSearchQuery = this.searchQuerySource.asObservable();

  constructor(private http: HttpClient) {}

  // OBTENER EL TOKEN
  getRequestToken(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/authentication/token/new?api_key=${this.apiKey}`
    );
  }

  // CREAR UNA SESION
  createSession(requestToken: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/authentication/session/new?api_key=${this.apiKey}`,
      {
        request_token: requestToken,
      }
    );
  }

  // SERIES POPULARES
  getPopularTvShows(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/tv/popular?api_key=${this.apiKey}&language=es`
    );
  }
  // ULTIMOS ESTRENOS
  getNowPlayingMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}&language=es`
    );
  }
  // TODAS LAS PELICULAS
  getAllMovies(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=es`
    );
  }

  // SERIES
  getSerieDetails(serieId: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/tv/${serieId}?api_key=${this.apiKey}&language=es`
    );
  }
  // BUSCAR PELICULA
  searchMovies(query: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}&language=es`
    );
  }
  // DETALLES
  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}&language=es`
    );
  }
  // ACTUALIZA LA CONSULTA DE BÚSQUEDA
  changeSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }
}
