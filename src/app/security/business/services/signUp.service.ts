import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {EndPoints} from '@core/httpClient/end-points';
import {catchError, map} from 'rxjs/operators';
import {ResponseSimpleDto} from '@core/abstractClases/ResponseSimpleDto';
import {MapperService} from '@core/mapper/mapper.service';
import {HttpService} from '@core/httpClient/http.service';
import {SignUpModel} from '../../access/models/SignUpModel';
import {SignUpDto} from '../dtos/signUp/SignUpDto';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private mapperService: MapperService,
              private httpService: HttpService) {
  }

  signUp(model: SignUpModel): Observable<string> {

    const dto = this.buildDto(model);

    return this.httpService
      .post<ResponseSimpleDto>(EndPoints.AUTH_SIGN_UP, dto)
      .pipe(
        map((res: ResponseSimpleDto) => {
            // Return message
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

  private buildDto(model: SignUpModel): any {
    const dto = this.mapperService.map(model, SignUpDto);
    return dto;
  }
}
