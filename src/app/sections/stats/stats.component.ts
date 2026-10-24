import { Component } from '@angular/core';
import { stats, Stat } from '../../data/site-content';
import { CountUpDirective, RevealDirective } from '../../shared/effects.directives';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CountUpDirective, RevealDirective],
  templateUrl: './stats.component.html'
})
export class StatsComponent {
  readonly stats: Stat[] = stats;
}
