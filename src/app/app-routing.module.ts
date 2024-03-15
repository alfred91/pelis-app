import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth.guard';
import { SeriesComponent } from './series/series.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';

const routes: Routes = [
  // RUTAS PROTEGIDAS CON AUTHGUARD
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'search-movies',
    component: SearchMoviesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'all-movies',
    component: AllMoviesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'series',
    component: SeriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'serie/:id',
    component: SerieDetailsComponent,
    canActivate: [AuthGuard],
  },

  // RUTAS DESPROTEGIDAS
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
