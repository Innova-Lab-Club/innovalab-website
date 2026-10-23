import { Component, HostListener } from '@angular/core';
import { navLinks, NavLink } from '../../data/site-content';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent {
  readonly navLinks: NavLink[] = navLinks;
  menuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 30;
  }
}
