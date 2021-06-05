import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {DeleteService} from '@core/delete/delete.service';
import {UserEndpoints} from './user-endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserDeleteService extends DeleteService {

  constructor(protected httpService: HttpService) {
    super(httpService, new UserEndpoints());
  }

}
