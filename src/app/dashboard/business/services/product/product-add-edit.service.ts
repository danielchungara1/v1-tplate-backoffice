import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {MapperService} from '@core/mapper/mapper.service';
import {HttpService} from '@core/httpClient/http.service';
import {ProductModel} from '../../../access/models/ProductModel';
import {ProductDto} from '../../dtos/product/ProductDto';

@Injectable({
  providedIn: 'root'
})
export class ProductAddEditService {

  constructor(private mapperService: MapperService,
              private httpService: HttpService) {
  }

  create(model: ProductModel): Observable<string> {

    const dto = this.buildDto(model);

    return this.httpService
      .post<ResponseSimpleDto>(EndPoints.PRODUCTS_CREATE, dto)
      .pipe(
        map((res: ResponseSimpleDto) => {
            // Return message
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  update(model: ProductModel, id: number): Observable<string> {

    const dto = this.buildDto(model);

    return this.httpService
      .put<ResponseSimpleDto>(EndPoints.PRODUCTS + `/${id}`, dto)
      .pipe(
        map((res: ResponseSimpleDto) => {
            // Return message
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  private buildDto(model: ProductModel): any {
    const dto = this.mapperService.map(model, ProductDto);
    return dto;
  }
}
