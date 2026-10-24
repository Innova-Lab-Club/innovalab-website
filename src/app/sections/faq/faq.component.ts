import { Component } from '@angular/core';
import { CLUB_EMAIL, faqs, Faq } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/effects.directives';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './faq.component.html',
  styles: `
    details > summary { list-style: none; }
    details > summary::-webkit-details-marker { display: none; }
    details[open] .faq-toggle { transform: rotate(45deg); }
    details[open] { border-color: rgba(139, 124, 246, 0.35); background-color: rgba(139, 124, 246, 0.04); }
  `
})
export class FaqComponent {
  readonly faqs: Faq[] = faqs;
  readonly email = CLUB_EMAIL;
}
