import {CrudEndpoints} from '@core/crud/crud-endpoints';
import {environment} from '@env';

export class UserEndpoints implements CrudEndpoints {
  ALL = environment.API + '/users/all';
  BASE = environment.API + '/users';
  NEW = environment.API + '/users/new-user';
}
