import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {CrudService} from '@core/crud/crud.service';
import {ProductEndpoints} from './product-endpoints';
import {ProductModel} from '../../../access/models/ProductModel';
import {ProductDto} from '../../dtos/product/ProductDto';
import {MapperService} from '@core/mapper/mapper.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService<ProductModel> {

  constructor(protected httpService: HttpService,
              private mapperService: MapperService) {
    super(httpService, new ProductEndpoints());
  }

  protected buildDto(model: ProductModel): any {
    const dto = this.mapperService.map(model, ProductDto);
    dto.categoryId = model.category?.id;
    dto.brandId = model.brand?.id;
    return dto;
  }

}
