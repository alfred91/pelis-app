import { Component, HostListener } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('linkAnimation', [
      state(
        'normal',
        style({
          color: 'white',
        })
      ),
      state(
        'highlighted',
        style({
          color: '#ff6060',
        })
      ),
      transition('normal <=> highlighted', animate('0.3s ease')),
    ]),
  ],
})
export class NavbarComponent {
  searchQuery: string = '';
  isMenuOpen: boolean = false;
  isDesktopView: boolean = true;

  constructor(private tmdbService: TmdbService, private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktopView = window.innerWidth > 768;
    if (this.isDesktopView) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  searchMovies(): void {
    this.tmdbService.changeSearchQuery(this.searchQuery);
    this.router.navigate(['/search-movies']);
  }
}
