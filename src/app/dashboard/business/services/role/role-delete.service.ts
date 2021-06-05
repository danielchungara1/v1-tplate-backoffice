import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {DeleteService} from '@core/delete/delete.service';
import {RoleEndpoints} from './role-endpoints';

@Injectable({
  providedIn: 'root'
})
export class RoleDeleteService extends DeleteService {

  constructor(protected httpService: HttpService) {
    super(httpService, new RoleEndpoints());
  }

}
