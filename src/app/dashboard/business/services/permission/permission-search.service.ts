import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {MapperService} from '@core/mapper/mapper.service';
import {HttpService} from '@core/httpClient/http.service';
import {PermissionModel} from '../../../access/models/PermissionModel';
import {PermissionListResponseDto} from '../../dtos/permission/PermissionListResponseDto';
import {PageModel} from '@core/abstractClases/PageModel';
import {PermissionPageDto} from '../../dtos/permission/PermissionPageDto';

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

  public getPage(searchText: string, number: number): Observable<PageModel<PermissionModel>> {
    return this.httpService.get<PermissionPageDto>(EndPoints.PERMISSIONS_GET_PAGE + `?text=${searchText}`)
      .pipe(
        map((res: PermissionPageDto) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }
}
