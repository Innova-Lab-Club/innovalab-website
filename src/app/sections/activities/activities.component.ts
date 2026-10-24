import { Component } from '@angular/core';
import { focusAreas, FocusArea } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective, SpotlightDirective } from '../../shared/effects.directives';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent {
  readonly focusAreas: FocusArea[] = focusAreas;
}
