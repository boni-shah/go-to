import { Component, Input } from '@angular/core';
import { IGoTo } from '../models/igo-to';

@Component({
  selector: 'list-snapshot',
  templateUrl: './list-snapshot.component.html',
  styleUrls: ['./list-snapshot.component.css']
})
export class ListSnapshotComponent {
  @Input() dataToDisplay: IGoTo[] = [];

}
