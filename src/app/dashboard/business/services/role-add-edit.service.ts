import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {MapperService} from '@core/mapper/mapper.service';
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

    const roleDto = this.buildDto(roleModel);

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

    const roleDto = this.buildDto(roleModel);

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

  private buildDto(roleModel: RoleModel): any {
    const roleDto = this.mapperService.map(roleModel, RoleDto);
    roleDto.permissionIds = roleModel.permissions.map(role => role.id);
    return roleDto;
  }
}
