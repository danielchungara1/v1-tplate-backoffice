import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {SearchService} from '@core/search/search.service';
import {ProductEndpoints} from './product-endpoints';
import {ProductModel} from '../../../access/models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService extends SearchService<ProductModel> {

  constructor(protected httpService: HttpService) {
    super(httpService, new ProductEndpoints());
  }

}
