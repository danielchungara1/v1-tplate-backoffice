import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CategorySearchService} from './category-search.service';
import {RoleModel} from '../../../access/models/RoleModel';
import {CategoryModel} from '../../../access/models/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor(private service: CategorySearchService) { }

  public getAll(): Observable<CategoryModel[]> {
    return this.service.getAll();
  }
}
