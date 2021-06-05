import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {BrandModel} from '../../../access/models/BrandModel';
import {SearchService} from '@core/search/search.service';
import {BrandEndpoints} from './brand-endpoints';

@Injectable({
  providedIn: 'root'
})
export class BrandSearchService extends SearchService<BrandModel> {

  constructor(protected httpService: HttpService) {
    super(httpService, new BrandEndpoints());
  }

}
