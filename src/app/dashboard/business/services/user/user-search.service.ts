import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {SearchService} from '@core/search/search.service';
import {UserEndpoints} from './user-endpoints';
import {ProductModel} from '../../../access/models/ProductModel';
import {RoleModel} from '../../../access/models/RoleModel';
import {UserModel} from '../../../access/models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService extends SearchService<UserModel> {

  constructor(protected httpService: HttpService) {
    super(httpService, new UserEndpoints());
  }

}
