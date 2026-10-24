import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CLUB_EMAIL, fieldsOfStudy, interestOptions } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective } from '../../shared/effects.directives';

interface JoinRequest {
  name: string;
  email: string;
  field: string;
  year: string;
  message: string;
}

/**
 * Join form. There is no backend: submitting opens the visitor's email app
 * with a pre-filled message to the club address.
 */
@Component({
  selector: 'app-join',
  standalone: true,
  imports: [FormsModule, IconComponent, RevealDirective],
  templateUrl: './join.component.html'
})
export class JoinComponent {
  readonly email = CLUB_EMAIL;
  readonly fields = fieldsOfStudy;
  readonly interests = interestOptions;
  readonly years = ['1st year', '2nd year', '3rd year', 'Master / other'];

  readonly selectedInterests = signal<string[]>([]);
  readonly submitted = signal(false);

  model: JoinRequest = { name: '', email: '', field: '', year: '', message: '' };

  toggleInterest(interest: string): void {
    this.selectedInterests.update(list =>
      list.includes(interest) ? list.filter(i => i !== interest) : [...list, interest]
    );
  }

  submit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    const { name, email, field, year, message } = this.model;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Field of study: ${field || '-'}`,
      `Year: ${year || '-'}`,
      `Interests: ${this.selectedInterests().join(', ') || '-'}`,
      '',
      message
    ].join('\n');

    const subject = `Join request: ${name}`;
    window.location.href =
      `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.submitted.set(true);
  }

  reset(form: NgForm): void {
    form.resetForm({ name: '', email: '', field: '', year: '', message: '' });
    this.selectedInterests.set([]);
    this.submitted.set(false);
  }
}
