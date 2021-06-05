import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {CrudService} from '@core/crud/crud.service';
import {PermissionEndpoints} from './permission-endpoints';
import {PermissionModel} from '../../access/models/PermissionModel';

@Injectable({
  providedIn: 'root'
})
export class PermissionSearchService extends CrudService<PermissionModel> {

  constructor(protected httpService: HttpService) {
    super(httpService, new PermissionEndpoints());
  }

  protected buildDto(model: PermissionModel): any {
    // It's necessary for the abstract method.
  }

}
