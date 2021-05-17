import {Injectable} from '@angular/core';
import ObjectMapper from 'object-mapper';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@core/end-points';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ResetPasswordModel} from '../../view/models/ResetPasswordModel';
import {ResetCodeDto} from '../dtos/ResetCodeDto';
import {ResponseDto} from '../dtos/ResponseDto';
import {UpdatePasswordDto} from '../dtos/UpdatePasswordDto';

@Injectable({
  providedIn: 'root'
})
export class ResetCodeService {

  constructor(private httpService: HttpService) {
  }

  sendResetCode(resetCodeModel: ResetPasswordModel): Observable<string> {

    const resetCodeDto = ObjectMapper(resetCodeModel, ResetCodeDto);

    return this.httpService
      .post<ResponseDto<any>>(EndPoints.AUTH_SEND_RESET_CODE, resetCodeDto)
      .pipe(
        map((res: ResponseDto<any>) => {
            // Return message
            return res.message;
          }
        ),
        catchError(err => throwError(err.message))
      );
  }

  updatePassword(resetPasswordModel: ResetPasswordModel): Observable<string> {

    if (!resetPasswordModel.email) {
      return throwError('Complete the previous step before continue.');
    }

    const updatePasswordDto = ObjectMapper(resetPasswordModel, UpdatePasswordDto);

    return this.httpService
      .put<ResponseDto<any>>(EndPoints.AUTH_UPDATE_PASSWORD, updatePasswordDto)
      .pipe(
        map((res: ResponseDto<any>) => {
            // Return message
            return res.message;
          }
        ),
        catchError(err => throwError(err.message))
      );
  }

}

