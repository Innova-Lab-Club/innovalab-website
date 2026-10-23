import { Component } from '@angular/core';
import { values, Value } from '../../data/site-content';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly values: Value[] = values;
}
