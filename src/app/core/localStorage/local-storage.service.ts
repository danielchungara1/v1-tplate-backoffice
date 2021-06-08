import {Injectable} from '@angular/core';
import {LocalStorageKeys} from '@core/localStorage/local-storage-keys';
import {UserModel} from '../../dashboard/models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public getToken(): string {
    return localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
  }

  public setToken(token: string): void {
    localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, token);
  }

  public getUser(): UserModel {
    return JSON.parse(localStorage.getItem(LocalStorageKeys.AUTH_USER)) as UserModel ;
  }

  public setUser(user: UserModel): void {
    localStorage.setItem(LocalStorageKeys.AUTH_USER, JSON.stringify(user));
  }

  clear(): void{
    localStorage.clear();
  }
}
