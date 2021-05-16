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

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private static jwtService: JwtHelperService = new JwtHelperService();

  constructor(private httpService: HttpService, private storeService: StoreService) {
  }

  login(loginModel: LoginModel): Observable<string> {

    const loginDto = ObjectMapper(loginModel, LoginDto);

    return this.httpService
      .post<LoginResponseDto>(EndPoints.AUTH_LOGIN, loginDto)
      .pipe(
        map((res: LoginResponseDto) => {
            // Save logged user
            const tokenDecoded: { sub: string; CLAIM_ID: number; } = LoginService.jwtService.decodeToken(res.data.token);
            this.storeService.user = UserBuilder.builder()
                .id(tokenDecoded.CLAIM_ID)
                .username(tokenDecoded.sub)
                .token(res.data.token)
                .build();
            // Return message
            return res.message;
          }
        ),
        catchError(err => throwError(err.message))
      );
  }

}

