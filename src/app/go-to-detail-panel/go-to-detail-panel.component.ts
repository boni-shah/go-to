import { Component, Input } from '@angular/core';
import { IGoTo } from '../models/igo-to';

@Component({
  selector: 'go-to-detail-panel',
  templateUrl: './go-to-detail-panel.component.html',
  styleUrls: ['./go-to-detail-panel.component.css']
})
export class GoToDetailPanelComponent {
  @Input() goToData!: IGoTo;
}
