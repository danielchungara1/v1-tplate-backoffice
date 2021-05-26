import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {RoleModel} from '../../../access/models/RoleModel';
import {RoleListResponseDto} from '../../dtos/role/RoleListResponseDto';
import {UserModel} from '../../../access/models/UserModel';
import {UserResponseDto} from '../../dtos/user/UserResponseDto';
import {RoleResponseDto} from '../../dtos/role/RoleResponseDto';
import {BrandModel} from '../../../access/models/BrandModel';
import {BrandListResponseDto} from '../../dtos/brand/BrandListResponseDto';

@Injectable({
  providedIn: 'root'
})
export class BrandSearchService {

  constructor(private httpService: HttpService) {
  }

  public getBrands(): Observable<BrandModel[]> {
    return this.httpService.get<BrandListResponseDto>(EndPoints.BRANDS_GET_ALL)
      .pipe(
        map((res: BrandListResponseDto) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  // getRole(roleId: number): Observable<RoleModel> {
  //   return this.httpService
  //     .get<RoleResponseDto>(EndPoints.ROLES + `/${roleId}`)
  //     .pipe(
  //       map((res: RoleResponseDto) => {
  //           // Return message
  //           return res.data;
  //         }
  //       ),
  //       catchError((err: ResponseSimpleDto) => throwError(err.message))
  //     );
  // }

}
