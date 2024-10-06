import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SeriesComponent } from './series/series.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';

@NgModule({ declarations: [
        // COMPONENTES DEL PROYECTO
        AppComponent,
        NavbarComponent,
        HomeComponent,
        AllMoviesComponent,
        SearchMoviesComponent,
        MovieDetailsComponent,
        FooterComponent,
        AuthCallbackComponent,
        WelcomeComponent,
        SeriesComponent,
        SerieDetailsComponent,
    ],
    bootstrap: [
        // COMPONENTE PRINCIPAL
        AppComponent,
    ], imports: [
        // MÓDULOS IMPORTADOS
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule], providers: [
        // SERVICIOS PROVEEDORES
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
