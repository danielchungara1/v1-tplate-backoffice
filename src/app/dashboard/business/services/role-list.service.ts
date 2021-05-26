import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RoleSearchService} from './shared/role-search.service';
import {RoleModel} from '../../access/models/RoleModel';

@Injectable({
  providedIn: 'root'
})
export class RoleListService {

  constructor(private roleSearchService: RoleSearchService) { }

  public getRoles(): Observable<RoleModel[]> {
    return this.roleSearchService.getRoles();
  }
}
