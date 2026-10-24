import { Component } from '@angular/core';
import { CLUB_EMAIL, navLinks, socialLinks } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './site-footer.component.html'
})
export class SiteFooterComponent {
  readonly navLinks = navLinks;
  readonly socialLinks = socialLinks;
  readonly email = CLUB_EMAIL;
  readonly year = new Date().getFullYear();
}
