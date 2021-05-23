import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpService} from '@core/httpClient/http.service';
import {EndPoints} from '@core/httpClient/end-points';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {response} from 'express';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDeleteService {

  constructor(private httpService: HttpService) {
  }

  public deleteUser(id: number): Observable<string> {

    return this.httpService
      .delete<ResponseSimpleDto>(EndPoints.USERS + `/${id}`)
      .pipe(
        map((res: ResponseSimpleDto) => {
          return res.message;
        }),
        catchError((error: ResponseSimpleDto) => throwError(error.message))
      );

  }
}
