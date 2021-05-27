import {Injectable} from '@angular/core';
import {HttpService} from '@core/httpClient/http.service';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {BrandModel} from '../../../access/models/BrandModel';
import {BrandListResponseDto} from '../../dtos/brand/BrandListResponseDto';
import {BrandResponseDto} from '../../dtos/brand/BrandResponseDto';

@Injectable({
  providedIn: 'root'
})
export class BrandSearchService {

  constructor(private httpService: HttpService) {
  }

  public getAll(): Observable<BrandModel[]> {
    return this.httpService.get<BrandListResponseDto>(EndPoints.BRANDS_GET_ALL)
      .pipe(
        map((res: BrandListResponseDto) => {
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  getOne(id: number): Observable<BrandModel> {
    return this.httpService
      .get<BrandResponseDto>(EndPoints.BRANDS + `/${id}`)
      .pipe(
        map((res: BrandResponseDto) => {
            // Return message
            return res.data;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

}
