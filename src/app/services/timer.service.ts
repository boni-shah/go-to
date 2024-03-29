import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  getCounter(tick: any) {
    return timer(0, tick);
  }
}