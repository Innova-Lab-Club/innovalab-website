import { Component, ViewEncapsulation } from '@angular/core';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { StatsComponent } from './sections/stats/stats.component';
import { AboutComponent } from './sections/about/about.component';
import { ActivitiesComponent } from './sections/activities/activities.component';
import { EventsComponent } from './sections/events/events.component';
import { CommunityComponent } from './sections/community/community.component';
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
    EventsComponent,
    CommunityComponent,
    JoinComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
