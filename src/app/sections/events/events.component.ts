import { Component } from '@angular/core';
import { events, EventItem } from '../../data/site-content';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html'
})
export class EventsComponent {
  readonly events: EventItem[] = events;
}
