import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileName!: string;
  Id!: FormControl;
  FirstName!: FormControl;
  LastName!: FormControl;
  UserName!: FormControl;
  ProfileForm!: FormGroup;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.Id = new FormControl(this.auth.currentUser?.Id);
    this.FirstName = new FormControl(this.auth.currentUser?.FirstName, Validators.required);
    this.LastName = new FormControl(this.auth.currentUser?.LastName, Validators.required);
    this.UserName = new FormControl(this.auth.currentUser?.UserName, Validators.required);
    this.ProfileForm = new FormGroup({
      Id: this.Id,
      FirstName: this.FirstName,
      LastName: this.LastName,
      UserName: this.UserName
    });
    this.profileName = this.auth.currentUser?.FirstName + ' ' + this.auth.currentUser?.LastName;
  }

  saveProfile() {
    console.log(this.ProfileForm);
    this.router.navigate(['/profile']);
  }

  cancel(): void {

    this.router.navigate(['/profile']);
  }
}
