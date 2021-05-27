import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BrandSearchService} from './brand-search.service';
import {BrandModel} from '../../../access/models/BrandModel';

@Injectable({
  providedIn: 'root'
})
export class BrandListService {

  constructor(private brandSearchService: BrandSearchService) { }

  public getBrands(): Observable<BrandModel[]> {
    return this.brandSearchService.getAll();
  }
}
