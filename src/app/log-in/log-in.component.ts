import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  username!: string;
  password!: string;
  mouseOverSubmitButton: boolean = false;

  constructor(private route: Router, private auth: AuthService) { }

  async login(formValues: any) {
    console.log(formValues); //Just for show, we are going to use the properties bound to NgModel
    await this.auth.validateUser(this.username, this.password);
    this.route.navigate(["/home"]);
  }

  cancel() {
    this.route.navigate(["/home"]);
  }
}
