import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {DeleteService} from '@core/delete/delete.service';
import {BrandEndpoints} from './brand-endpoints';

@Injectable({
  providedIn: 'root'
})
export class BrandDeleteService extends DeleteService {

  constructor(protected httpService: HttpService) {
    super(httpService, new BrandEndpoints());
  }

}
