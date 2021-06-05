import {HttpService} from '@core/httpClient/http.service';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {CrudEndpoints} from '@core/search/crud-endpoints';

export class DeleteService {

  constructor(protected httpService: HttpService, protected crudEndpoints: CrudEndpoints) {
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
}
