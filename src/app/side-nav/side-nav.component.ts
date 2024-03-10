import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, timer } from 'rxjs';
import { AppState } from '../models/app-state';
import { getSidenavNumberOfClicksDetails, getSidenavNumberOfSavesDetails, getSidenavNumberOfSearchesDetails } from '../state/side-nav.selector';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {
  countDown!: Subscription;
  counter = 0;
  tick = 1000;

  clickCount: number = 0;
  saveCount: number = 0;
  searchCount: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(() => ++this.counter)

    this.store.select(getSidenavNumberOfClicksDetails).subscribe(
      _clickCount => this.clickCount = _clickCount);
    this.store.select(getSidenavNumberOfSavesDetails).subscribe(
      _saveCount => this.saveCount = _saveCount);
    this.store.select(getSidenavNumberOfSearchesDetails).subscribe(
      _searchCount => this.searchCount = _searchCount);
  }

  ngOnDestroy() {
    this.countDown.unsubscribe();
  }
}
