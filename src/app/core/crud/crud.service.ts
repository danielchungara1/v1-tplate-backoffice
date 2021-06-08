import {HttpService} from '@core/httpClient/http.service';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstract/ResponseSimpleDto';
import {Page} from '@core/abstract/Page';
import {ResponseDto} from '@core/abstract/ResponseDto';
import {CrudEndpoints} from './crud-endpoints';
import {EventEmitter} from '@angular/core';
import {ResultSearch} from '@core/abstract/ResultSearch';


export abstract class CrudService<T> {

  protected constructor(protected httpService: HttpService,
                        protected crudEndpoints: CrudEndpoints) {
  }

  $resultSearch: EventEmitter<ResultSearch<T>> = new EventEmitter();

  PAGE_SIZE = '10';

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
    return this.httpService.get<ResponseDto<Page<T>>>(this.crudEndpoints.BASE + `?text=${searchText}&page=${pageNumber}&size=${this.PAGE_SIZE}`)
      .pipe(
        map((res: ResponseDto<Page<T>>) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  public searchAndEmit(text: string, pageNumber: number): void {
    this.httpService.get<ResponseDto<Page<T>>>(this.crudEndpoints.BASE + `?text=${text}&page=${pageNumber}&size=${this.PAGE_SIZE}`)
      .subscribe((res: ResponseDto<Page<T>>) => {
              const resultSearch: ResultSearch<T> =
                {
                  page: res.data,
                  searchText: text
                };
              this.$resultSearch.next(resultSearch);
      } );
  }

  public delete(id: number): Observable<string> {

    return this.httpService
      .delete<ResponseSimpleDto>(this.crudEndpoints.BASE + `/${id}`)
      .pipe(
        map((res: ResponseSimpleDto) => {
          return res.message;
        }),
        catchError((error: ResponseSimpleDto) => throwError(error.message))
      );

  }

  create(model: T): Observable<string> {

    const dto = this.buildDto(model);

    return this.httpService
      .post<ResponseSimpleDto>(this.crudEndpoints.NEW, dto)
      .pipe(
        map((res: ResponseSimpleDto) => {
            // Return message
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  update(model: T, id: number): Observable<string> {

    const dto = this.buildDto(model);

    return this.httpService
      .put<ResponseSimpleDto>(this.crudEndpoints.BASE + `/${id}`, dto)
      .pipe(
        map((res: ResponseSimpleDto) => {
            // Return message
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  protected abstract buildDto(model: T): any;

}
