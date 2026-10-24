import { Component } from '@angular/core';
import { projects, Project } from '../../data/site-content';
import { IconComponent } from '../../shared/icon.component';
import { RevealDirective, SpotlightDirective } from '../../shared/effects.directives';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  readonly projects: Project[] = projects;

  readonly statusStyles: Record<Project['status'], string> = {
    'Live': 'text-emerald-300 border-emerald-300/30 bg-ink-950/70',
    'In progress': 'text-brand-sky border-brand-blue/40 bg-ink-950/70',
    'Prototype': 'text-brand-sky border-brand-sky/40 bg-ink-950/70'
  };
}
