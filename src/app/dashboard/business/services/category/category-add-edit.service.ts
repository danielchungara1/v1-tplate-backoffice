import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {MapperService} from '@core/mapper/mapper.service';
import {HttpService} from '@core/httpClient/http.service';
import {CategoryDto} from '../../dtos/category/CategoryDto';
import {CategoryModel} from '../../../access/models/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryAddEditService {

  constructor(private mapperService: MapperService,
              private httpService: HttpService) {
  }

  create(model: CategoryModel): Observable<string> {

    const dto = this.buildDto(model);

    return this.httpService
      .post<ResponseSimpleDto>(EndPoints.CATEGORIES_CREATE, dto)
      .pipe(
        map((res: ResponseSimpleDto) => {
            // Return message
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  update(model: CategoryModel, id: number): Observable<string> {

    const dto = this.buildDto(model);

    return this.httpService
      .put<ResponseSimpleDto>(EndPoints.CATEGORIES + `/${id}`, dto)
      .pipe(
        map((res: ResponseSimpleDto) => {
            // Return message
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  private buildDto(model: CategoryModel): any {
    const dto = this.mapperService.map(model, CategoryDto);
    return dto;
  }
}
