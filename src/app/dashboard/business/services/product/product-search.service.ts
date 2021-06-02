import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {ProductModel} from '../../../access/models/ProductModel';
import {ProductListResponseDto} from '../../dtos/product/ProductListResponseDto';
import {ProductResponseDto} from '../../dtos/product/ProductResponseDto';
import {PageModel} from '@core/abstractClases/PageModel';
import {CategoryModel} from '../../../access/models/CategoryModel';
import {CategoryPageDto} from '../../dtos/category/CategoryPageDto';
import {ProductPageDto} from '../../dtos/product/ProductPageDto';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  constructor(private httpService: HttpService) {
  }

  public getAll(): Observable<ProductModel[]> {
    return this.httpService.get<ProductListResponseDto>(EndPoints.PRODUCTS_GET_ALL)
      .pipe(
        map((res: ProductListResponseDto) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  getOne(id: number): Observable<ProductModel> {
    return this.httpService
      .get<ProductResponseDto>(EndPoints.PRODUCTS + `/${id}`)
      .pipe(
        map((res: ProductResponseDto) => {
            // Return message
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  public getPage(searchText: string, pageNumber: number): Observable<PageModel<ProductModel>> {
    return this.httpService.get<ProductPageDto>(EndPoints.PRODUCTS + `?text=${searchText}&page=${pageNumber}&size=7`)
      .pipe(
        map((res: ProductPageDto) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

}
