import {environment} from '@env';

export class EndPoints {

  // Security Endpoints
  static AUTH_UPDATE_PASSWORD = environment.API + '/auth/password';
  static AUTH_SEND_RESET_CODE = environment.API + '/auth/password/reset-code';
  static AUTH_LOGIN = environment.API + '/auth/login';

  // User Endpoints
  static USERS = environment.API + '/users';
  static USERS_GET_ALL = environment.API + '/users/all';
  static USERS_CREATE = environment.API + '/users/new-user';

  // Roles Endpoints
  static ROLES_GET_ALL = environment.API + '/roles/all';

  // Permissions Endpoints
  static PERMISSIONS_GET_ALL = environment.API + '/permissions/all';
}
