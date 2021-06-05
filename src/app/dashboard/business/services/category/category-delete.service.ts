import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {DeleteService} from '@core/delete/delete.service';
import {CategoryEndpoints} from './category-endpoints';

@Injectable({
  providedIn: 'root'
})
export class CategoryDeleteService extends DeleteService {

  constructor(protected httpService: HttpService) {
    super(httpService, new CategoryEndpoints());
  }

}
