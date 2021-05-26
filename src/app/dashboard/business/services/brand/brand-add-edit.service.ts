import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {MapperService} from '@core/mapper/mapper.service';
import {HttpService} from '@core/httpClient/http.service';
import {BrandModel} from '../../../access/models/BrandModel';
import {BrandDto} from '../../dtos/brand/BrandDto';

@Injectable({
  providedIn: 'root'
})
export class BrandAddEditService {

  constructor(private mapperService: MapperService,
              private httpService: HttpService) {
  }

  createBrand(brandModel: BrandModel): Observable<string> {

    const dto = this.buildDto(brandModel);

    return this.httpService
      .post<ResponseSimpleDto>(EndPoints.BRANDS_CREATE, dto)
      .pipe(
        map((res: ResponseSimpleDto) => {
            // Return message
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  updateBrand(model: BrandModel, id: number): Observable<string> {

    const dto = this.buildDto(model);

    return this.httpService
      .put<ResponseSimpleDto>(EndPoints.BRANDS + `/${id}`, dto)
      .pipe(
        map((res: ResponseSimpleDto) => {
            // Return message
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  private buildDto(brandModel: BrandModel): any {
    return this.mapperService.map(brandModel, BrandDto);
  }
}
