import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductSearchService} from './product-search.service';
import {ProductModel} from '../../../access/models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private service: ProductSearchService) { }

  public getAll(): Observable<ProductModel[]> {
    return this.service.getAll();
  }
}
