import {Injectable} from '@angular/core';
import {LocalStorageKeys} from '@core/localStorage/local-storage-keys';

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

}
