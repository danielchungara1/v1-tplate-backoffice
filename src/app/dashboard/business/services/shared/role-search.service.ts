import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {RoleModel} from '../../../access/models/RoleModel';
import {RoleListResponseDto} from '../../dtos/RoleListResponseDto';
import {UserModel} from '../../../access/models/UserModel';
import {UserResponseDto} from '../../dtos/UserResponseDto';
import {RoleResponseDto} from '../../dtos/RoleResponseDto';

@Injectable({
  providedIn: 'root'
})
export class RoleSearchService {

  constructor(private httpService: HttpService) {
  }

  public getRoles(): Observable<RoleModel[]> {
    return this.httpService.get<RoleListResponseDto>(EndPoints.ROLES_GET_ALL)
      .pipe(
        map((res: RoleListResponseDto) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  getRole(roleId: number): Observable<RoleModel> {
    return this.httpService
      .get<RoleResponseDto>(EndPoints.ROLES + `/${roleId}`)
      .pipe(
        map((res: RoleResponseDto) => {
            // Return message
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

}
