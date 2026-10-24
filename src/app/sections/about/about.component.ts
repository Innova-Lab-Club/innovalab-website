import { Component } from '@angular/core';
import { values, Value } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective, SpotlightDirective } from '../../shared/effects.directives';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly values: Value[] = values;
}
