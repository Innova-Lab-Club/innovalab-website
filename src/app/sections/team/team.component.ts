import { Component } from '@angular/core';
import { team, TeamMember } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective, SpotlightDirective } from '../../shared/effects.directives';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './team.component.html'
})
export class TeamComponent {
  readonly team: TeamMember[] = team;

  readonly avatarColors = [
    'bg-brand-blue text-white',
    'bg-brand-ice text-ink-950',
    'bg-brand-deep text-white'
  ];
}
