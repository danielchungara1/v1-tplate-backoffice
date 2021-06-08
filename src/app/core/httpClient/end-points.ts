import {environment} from '@env';

export class EndPoints {

  // Security Endpoints
  static AUTH_UPDATE_PASSWORD = environment.API + '/auth/password';
  static AUTH_SEND_RESET_CODE = environment.API + '/auth/password/reset-code';
  static AUTH_LOGIN = environment.API + '/auth/login';
  static AUTH_SIGN_UP = environment.API + '/auth/sign-up';

  // User Endpoints
  static USERS = environment.API + '/users';
  static USERS_GET_ALL = environment.API + '/users/all';
  static USERS_CREATE = environment.API + '/users/new-user';

  // Role Endpoints
  static ROLES = environment.API + '/roles';
  static ROLES_GET_ALL = environment.API + '/roles/all';
  static ROLES_CREATE = environment.API + '/roles/new-role';

  // Brand Endpoints
  static BRANDS = environment.API + '/brands';
  static BRANDS_GET_ALL = environment.API + '/brands/all';
  static BRANDS_CREATE = environment.API + '/brands/new-brand';

  // Permission Endpoints
  static PERMISSIONS_GET_ALL = environment.API + '/permissions/all';
  static PERMISSIONS_GET_PAGE = environment.API + '/permissions';

  // Category Endpoints
  static CATEGORIES = environment.API + '/categories';
  static CATEGORIES_GET_ALL = environment.API + '/categories/all';
  static CATEGORIES_CREATE = environment.API + '/categories/new-category';

  // Product Enpoints
  static PRODUCTS = environment.API + '/products';
  static PRODUCTS_GET_ALL = environment.API + '/products/all';
  static PRODUCTS_CREATE = environment.API + '/products/new-product';
}
