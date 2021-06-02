import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {CategoryModel} from '../../../access/models/CategoryModel';
import {CategoryListResponseDto} from '../../dtos/category/CategoryListResponseDto';
import {CategoryResponseDto} from '../../dtos/category/CategoryResponseDto';
import {PageModel} from '@core/abstractClases/PageModel';
import {RoleModel} from '../../../access/models/RoleModel';
import {RolePageDto} from '../../dtos/role/RolePageDto';
import {CategoryPageDto} from '../../dtos/category/CategoryPageDto';

@Injectable({
  providedIn: 'root'
})
export class CategorySearchService {

  constructor(private httpService: HttpService) {
  }

  public getAll(): Observable<CategoryModel[]> {
    return this.httpService.get<CategoryListResponseDto>(EndPoints.CATEGORIES_GET_ALL)
      .pipe(
        map((res: CategoryListResponseDto) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  getOne(id: number): Observable<CategoryModel> {
    return this.httpService
      .get<CategoryResponseDto>(EndPoints.CATEGORIES + `/${id}`)
      .pipe(
        map((res: CategoryResponseDto) => {
            // Return message
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  public getPage(searchText: string, pageNumber: number): Observable<PageModel<CategoryModel>> {
    return this.httpService.get<CategoryPageDto>(EndPoints.CATEGORIES + `?text=${searchText}&page=${pageNumber}&size=7`)
      .pipe(
        map((res: CategoryPageDto) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }
}
