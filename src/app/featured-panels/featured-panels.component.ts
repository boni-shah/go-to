import { Component, Input } from '@angular/core';
import { IGoTo } from '../models/igo-to';
import { trigger, transition, animate, style } from '@angular/animations'
import { URLs } from '../data/url-list';

@Component({
  selector: 'featured-panels',
  templateUrl: './featured-panels.component.html',
  styleUrls: ['./featured-panels.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class FeaturedPanelsComponent {
  @Input() featuredURLs: IGoTo[] = URLs;
  currentPanel: number = 0;

  nextPanel() {
    this.currentPanel++;
    if (this.currentPanel >= this.featuredURLs.length)
      this.currentPanel = 0;
  }

  previousPanel() {
    this.currentPanel--;
    if (this.currentPanel < 0)
      this.currentPanel = this.featuredURLs.length - 1;
  }
}
