import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {CrudService} from '@core/crud/crud.service';
import {CategoryEndpoints} from './category-endpoints';
import {CategoryModel} from '../../../access/models/CategoryModel';
import {CategoryDto} from '../../dtos/category/CategoryDto';
import {MapperService} from '@core/mapper/mapper.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CrudService<CategoryModel> {

  constructor(protected httpService: HttpService,
              private mapperService: MapperService ) {
    super(httpService, new CategoryEndpoints());
  }

  protected buildDto(model: CategoryModel): any {
    const dto = this.mapperService.map(model, CategoryDto);
    dto.parentId = model.parent?.id; // Parent category is optional.
    return dto;
  }

}
