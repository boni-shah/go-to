import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../models/app-state';
import { TimerService } from '../services/timer.service';
import { sidenavAutoSave } from '../state/side-nav.action';

export const FixedCounterDuration = 300;

@Component({
  selector: 'go-to-details',
  templateUrl: './go-to-details.component.html',
  styleUrls: ['./go-to-details.component.css']
})
export class GoToDetailsComponent implements OnInit {
  countDown!: Subscription;
  counter = FixedCounterDuration;
  tick = 1000;
  timerColor: string = 'green';
  showCounter: boolean = true;

  constructor(private store: Store<AppState>, private timer: TimerService) { }

  ngOnInit() {
    this.countDown = this.timer.getCounter(this.tick).subscribe(() => {
      this.counter--;

      if (this.counter <= 0) {
        this.autoSave();
        this.counter = FixedCounterDuration;
        this.showCounter = true;
      }

      if (this.counter > 60)
        this.timerColor = 'green';
      if (this.counter < 60 && this.counter > 15)
        this.timerColor = 'yellow';
      if (this.counter < 15 && this.counter > 0)
        this.timerColor = 'red';

      if (this.counter < 5)
        this.showCounter = !this.showCounter;
    });
  }

  autoSave() {
    this.store.dispatch(sidenavAutoSave());
  }

  ngOnDestroy() {
    this.countDown.unsubscribe();
  }
}