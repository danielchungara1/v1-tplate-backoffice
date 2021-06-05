import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {SearchService} from '@core/search/search.service';
import {CategoryEndpoints} from './category-endpoints';
import {CategoryModel} from '../../../access/models/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategorySearchService extends SearchService<CategoryModel> {

  constructor(protected httpService: HttpService) {
    super(httpService, new CategoryEndpoints());
  }

}
