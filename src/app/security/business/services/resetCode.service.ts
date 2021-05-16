import {Injectable} from '@angular/core';
import {LoginModel} from '../../view/models/LoginModel';
import {LoginDto} from '../dtos/LoginDto';
import ObjectMapper from 'object-mapper';
import {HttpService} from '@core/http.service';
import {EndPoints} from '@core/end-points';
import {LoginResponseDto} from '../dtos/LoginResponseDto';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UserBuilder} from '../helpers/UserBuilder';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {StoreService} from '@core/store.service';
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

