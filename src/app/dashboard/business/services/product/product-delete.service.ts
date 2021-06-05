import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {DeleteService} from '@core/delete/delete.service';
import {ProductEndpoints} from './product-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductDeleteService extends DeleteService {

  constructor(protected httpService: HttpService) {
    super(httpService, new ProductEndpoints());
  }

}
