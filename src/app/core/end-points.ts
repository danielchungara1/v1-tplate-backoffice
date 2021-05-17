import {environment} from '@env';

export class EndPoints {

  static AUTH_UPDATE_PASSWORD = environment.API + '/auth/password';
  static AUTH_SEND_RESET_CODE = environment.API + '/auth/password/reset-code';
  static AUTH_LOGIN = environment.API + '/auth/login';

}
