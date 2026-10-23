import { Component } from '@angular/core';
import { stats, Stat } from '../../data/site-content';

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.component.html'
})
export class StatsComponent {
  readonly stats: Stat[] = stats;
}
