import { Component } from '@angular/core';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { StatsComponent } from './sections/stats/stats.component';
import { AboutComponent } from './sections/about/about.component';
import { ActivitiesComponent } from './sections/activities/activities.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { EventsComponent } from './sections/events/events.component';
import { TeamComponent } from './sections/team/team.component';
import { CommunityComponent } from './sections/community/community.component';
import { FaqComponent } from './sections/faq/faq.component';
import { JoinComponent } from './sections/join/join.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    SiteFooterComponent,
    HeroComponent,
    StatsComponent,
    AboutComponent,
    ActivitiesComponent,
    ProjectsComponent,
    EventsComponent,
    TeamComponent,
    CommunityComponent,
    FaqComponent,
    JoinComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
