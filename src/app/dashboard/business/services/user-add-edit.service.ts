import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {UserModel} from '../../access/models/UserModel';
import {MapperService} from '@core/mapper/mapper.service';
import {UserDto} from '../dtos/UserDto';
import {HttpService} from '@core/httpClient/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserAddEditService {

  constructor(private mapperService: MapperService,
              private httpService: HttpService) {
  }

  createUser(userModel: UserModel): Observable<string> {

    const userDto = this.mapperService.map(userModel, UserDto);

    return this.httpService
      .post<ResponseSimpleDto>(EndPoints.USERS_CREATE, userDto)
      .pipe(
        map((res: ResponseSimpleDto) => {
            // Return message
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

}
