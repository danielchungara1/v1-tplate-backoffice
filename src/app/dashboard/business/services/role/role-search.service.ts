import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {SearchService} from '@core/search/search.service';
import {RoleEndpoints} from './role-endpoints';
import {ProductModel} from '../../../access/models/ProductModel';
import {RoleModel} from '../../../access/models/RoleModel';

@Injectable({
  providedIn: 'root'
})
export class RoleSearchService extends SearchService<RoleModel> {

  constructor(protected httpService: HttpService) {
    super(httpService, new RoleEndpoints());
  }

}
