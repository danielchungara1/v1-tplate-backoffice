import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../../access/models/UserModel';
import {UserSearchService} from './shared/user-search.service';
import {PermissionModel} from '../../access/models/PermissionModel';
import {PermissionSearchService} from './shared/permission-search.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionListService {

  constructor(private permissionSearchService: PermissionSearchService) { }

  public getPermissions(): Observable<PermissionModel[]> {
    return this.permissionSearchService.getPermissions();
  }
}
