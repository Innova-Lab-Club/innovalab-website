import { Component } from '@angular/core';
import { focusAreas, FocusArea } from '../../data/site-content';

@Component({
  selector: 'app-activities',
  standalone: true,
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent {
  readonly focusAreas: FocusArea[] = focusAreas;
}
