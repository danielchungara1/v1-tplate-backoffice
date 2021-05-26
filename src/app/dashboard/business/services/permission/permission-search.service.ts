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
import {PermissionModel} from '../../../access/models/PermissionModel';
import {PermissionListResponseDto} from '../../dtos/permission/PermissionListResponseDto';

@Injectable({
  providedIn: 'root'
})
export class PermissionSearchService {

  constructor(private mapperService: MapperService,
              private httpService: HttpService) {
  }

  public getPermissions(): Observable<PermissionModel[]> {
    return this.httpService.get<PermissionListResponseDto>(EndPoints.PERMISSIONS_GET_ALL)
      .pipe(
        map((res: PermissionListResponseDto) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }
}
