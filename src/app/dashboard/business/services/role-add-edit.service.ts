import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {UserModel} from '../../access/models/UserModel';
import {MapperService} from '@core/mapper/mapper.service';
import {UserDto} from '../dtos/UserDto';
import {HttpService} from '@core/httpClient/http.service';
import {RoleModel} from '../../access/models/RoleModel';
import {RoleDto} from '../dtos/RoleDto';

@Injectable({
  providedIn: 'root'
})
export class RoleAddEditService {

  constructor(private mapperService: MapperService,
              private httpService: HttpService) {
  }

  createRole(roleModel: RoleModel): Observable<string> {

    // TODO: Remove hardcoded code
    const roleDto = this.mapperService.map(roleModel, RoleDto);
    roleDto.permissionIds = roleModel.permissions.map(role => role.id);

    return this.httpService
      .post<ResponseSimpleDto>(EndPoints.ROLES_CREATE, roleDto)
      .pipe(
        map((res: ResponseSimpleDto) => {
            // Return message
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  updateRole(roleModel: RoleModel, userId: number): Observable<string> {

    // TODO: Remove hardcoded code
    const roleDto = this.mapperService.map(roleModel, RoleDto);
    roleDto.permissionIds = [1, 2, 3, 4];

    return this.httpService
      .put<ResponseSimpleDto>(EndPoints.ROLES + `/${userId}`, roleDto)
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
