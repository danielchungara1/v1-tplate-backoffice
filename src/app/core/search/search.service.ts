import {HttpService} from '@core/httpClient/http.service';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {Page} from '@core/abstractClases/Page';
import {ResponseDto} from '@core/abstractClases/ResponseDto';
import {CrudEndpoints} from './crud-endpoints';


export class SearchService<T> {

  constructor(protected httpService: HttpService, protected crudEndpoints: CrudEndpoints) {
  }

  public getAll(): Observable<T[]> {
    return this.httpService.get<ResponseDto<T[]>>(this.crudEndpoints.ALL)
      .pipe(
        map((res: ResponseDto<T[]>) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  getOne(id: number): Observable<T> {
    return this.httpService
      .get<ResponseDto<T>>(this.crudEndpoints.BASE + `/${id}`)
      .pipe(
        map((res: ResponseDto<T>) => {
            // Return message
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  public getPage(searchText: string, pageNumber: number): Observable<Page<T>> {
    return this.httpService.get<ResponseDto<Page<T>>>(this.crudEndpoints.BASE + `?text=${searchText}&page=${pageNumber}&size=7`)
      .pipe(
        map((res: ResponseDto<Page<T>>) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

}
