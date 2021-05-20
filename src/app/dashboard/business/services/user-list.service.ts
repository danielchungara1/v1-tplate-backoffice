import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {UserModel} from '../../access/models/UserModel';
import {HttpService} from '@core/httpClient/http.service';
import {EndPoints} from '@core/httpClient/end-points';
import {UserListResponseDto} from '../dtos/UserListResponseDto';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private httpService: HttpService) {
  }

  public getUsers(): Observable<UserModel[]> {
    return this.httpService.get<UserListResponseDto>(EndPoints.USERS_GET_ALL)
      .pipe(
        map((res: UserListResponseDto) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

}
