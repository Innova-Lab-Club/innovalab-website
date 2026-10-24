import { Component } from '@angular/core';
import { socialLinks } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/effects.directives';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './community.component.html'
})
export class CommunityComponent {
  readonly socialLinks = socialLinks.filter(link => link.icon !== 'github');
}
