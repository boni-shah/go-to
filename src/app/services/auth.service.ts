import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';
import { USERS } from '../data/user-list';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser | undefined;

  constructor(private http: HttpClient) {
    this.currentUser = {
      Id: 1,
      FirstName: "John",
      LastName: "Doe",
      UserName: "Johns"
    };
  }

  validateUser(username: string, password: string) {
    var user = USERS.find(x => x.UserName === username);
    this.currentUser = user;
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  logOutUser() {
    this.currentUser = undefined;
  }
}
