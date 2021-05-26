import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../../../access/models/UserModel';
import {UserSearchService} from './user-search.service';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private userSearchService: UserSearchService) { }

  public getUsers(): Observable<UserModel[]> {
    return this.userSearchService.getUsers();
  }
}
