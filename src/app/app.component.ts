import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { State, Store } from '@ngrx/store';
import { AppState } from './models/app-state';
import { sidenavClick } from './state/side-nav.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Go To';

  constructor(private store: Store<AppState>, private state: State<AppState>) {
    console.log(this.state.value);
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;

  close() {
    this.sidenav.close();
  }

  onclick() {
    console.log("onclick: ");
    this.store.dispatch(sidenavClick());
  }
}
