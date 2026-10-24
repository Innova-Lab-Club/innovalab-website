import { Component } from '@angular/core';
import { FOUNDED_YEAR, marqueeTopics } from '../../data/site-content';
import { IconComponent, IconName } from '../../shared/icon.component';

interface OrbitChip {
  icon: IconName;
  label: string;
  position: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  readonly foundedYear = FOUNDED_YEAR;
  // Duplicated so the CSS marquee can loop seamlessly at -50%.
  readonly marquee = [...marqueeTopics, ...marqueeTopics];

  readonly chips: OrbitChip[] = [
    { icon: 'code', label: 'Web', position: 'left-[2%] top-[18%]' },
    { icon: 'brain', label: 'AI', position: 'right-[0%] top-[10%]' },
    { icon: 'cpu', label: 'IoT', position: 'right-[-2%] bottom-[30%]' },
    { icon: 'bot', label: 'Robotics', position: 'left-[-3%] top-[58%]' }
  ];
}
