import { Component, HostListener } from '@angular/core';
import { navLinks, NavLink } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent {
  readonly navLinks: NavLink[] = navLinks;
  menuOpen = false;
  isScrolled = false;
  activeHref = '';

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
    this.activeHref = this.findActiveSection();
  }

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.menuOpen = false;
  }

  private findActiveSection(): string {
    let active = '';
    for (const link of this.navLinks) {
      const section = document.querySelector(link.href);
      if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.35) {
        active = link.href;
      }
    }
    return active;
  }
}
