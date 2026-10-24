import { Component } from '@angular/core';
import { programs, Program } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective, SpotlightDirective } from '../../shared/effects.directives';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './events.component.html'
})
export class EventsComponent {
  readonly programs: Program[] = programs;
}
