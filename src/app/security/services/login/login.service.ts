import {Injectable} from '@angular/core';
import {LoginModel} from '../../models/LoginModel';
import {LoginDto} from './LoginDto';
import ObjectMapper from 'object-mapper';
import {HttpService} from '@core/httpClient/http.service';
import {EndPoints} from '@core/httpClient/end-points';
import {LoginResponseDto} from './LoginResponseDto';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {LocalStorageService} from '@core/localStorage/local-storage.service';
import {ResponseSimpleDto} from '@core/abstract/ResponseSimpleDto';

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
            this.localStorageService.setUser(res.data.user);
            return res.message;
          }
        ),
        catchError((err: ResponseSimpleDto) => throwError(err.message))
      );
  }

}

