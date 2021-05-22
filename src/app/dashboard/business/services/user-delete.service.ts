import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDeleteService {

  constructor() { }

  public deleteUser(id: number): Observable<string> {
    return this.crudService.delete(id);
  }
}
