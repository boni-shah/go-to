import { Component } from '@angular/core';
import { URLs } from '../data/url-list';
import { IGoTo } from '../models/igo-to';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  topEntries: IGoTo[] = URLs;
  mostFavorited: IGoTo[] = URLs;
  recentlyAdded: IGoTo[] = URLs;

}
