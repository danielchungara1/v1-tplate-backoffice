import {CrudEndpoints} from '@core/crud/crud-endpoints';
import {environment} from '@env';

export class RoleEndpoints implements CrudEndpoints {
  ALL = environment.API + '/roles/all';
  BASE = environment.API + '/roles';
  NEW = environment.API + '/roles/new-product';
}
