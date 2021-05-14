import {Injectable} from '@angular/core';
import {UserLogged} from './state/UserLogged';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _user: UserLogged;

  constructor() {
  }

  get user(): UserLogged {
    return this._user;
  }

  set user(value: UserLogged) {
    this._user = value;
  }

}
