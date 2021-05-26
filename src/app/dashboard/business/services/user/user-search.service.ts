import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {UserModel} from '../../../access/models/UserModel';
import {MapperService} from '@core/mapper/mapper.service';
import {HttpService} from '@core/httpClient/http.service';
import {UserResponseDto} from '../../dtos/user/UserResponseDto';
import {UserListResponseDto} from '../../dtos/user/UserListResponseDto';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  constructor(private mapperService: MapperService,
              private httpService: HttpService) {
  }

  getUser(userId: number): Observable<UserModel> {
    return this.httpService
      .get<UserResponseDto>(EndPoints.USERS + `/${userId}`)
      .pipe(
        map((res: UserResponseDto) => {
            // Return message
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
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
