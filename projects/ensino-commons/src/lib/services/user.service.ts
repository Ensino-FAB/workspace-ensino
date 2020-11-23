import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: User;
  private _userKey = 'sisplaer-current-user';

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
    localStorage.setItem(this._userKey, JSON.stringify(user));
  }

  constructor() {
    try {
      this._user = JSON.parse(localStorage.getItem(this._userKey)) as User;
    } catch {
      this._user = null;
    }
  }
}
