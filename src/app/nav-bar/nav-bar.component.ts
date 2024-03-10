import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() title!: string;
  @Output() sidenav: EventEmitter<any> = new EventEmitter();

  toggle() {
    this.sidenav.emit();
  }

  constructor(public auth: AuthService, private route: Router) { }

  goToProfilePage() {
    this.route.navigate(["/profile"]);
  }

  logout() {
    this.auth.logOutUser();
    this.route.navigate(["/home"]);
  }
}
