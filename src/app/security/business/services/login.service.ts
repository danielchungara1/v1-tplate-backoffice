import {Injectable} from '@angular/core';
import {LoginModel} from '../../access/models/LoginModel';
import {LoginDto} from '../dtos/login/LoginDto';
import ObjectMapper from 'object-mapper';
import {HttpService} from '@core/httpClient/http.service';
import {EndPoints} from '@core/httpClient/end-points';
import {LoginResponseDto} from '../dtos/login/LoginResponseDto';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {LocalStorageService} from '@core/localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpService: HttpService, private localStorageService: LocalStorageService) {
  }

  login(loginModel: LoginModel): Observable<string> {

    const loginDto = ObjectMapper(loginModel, LoginDto);

    return this.httpService
      .post<LoginResponseDto>(EndPoints.AUTH_LOGIN, loginDto)
      .pipe(
        map((res: LoginResponseDto) => {
            this.localStorageService.setToken(res.data.token);
            return res.message;
          }
        ),
        catchError(err => throwError(err.message))
      );
  }

}

