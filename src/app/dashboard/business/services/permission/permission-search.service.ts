import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {SearchService} from '@core/search/search.service';
import {PermissionEndpoints} from './permission-endpoints';
import {PermissionModel} from '../../../access/models/PermissionModel';

@Injectable({
  providedIn: 'root'
})
export class PermissionSearchService extends SearchService<PermissionModel> {

  constructor(protected httpService: HttpService) {
    super(httpService, new PermissionEndpoints());
  }

}
