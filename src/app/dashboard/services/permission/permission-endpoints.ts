import {CrudEndpoints} from '@core/crud/crud-endpoints';
import {environment} from '@env';

export class PermissionEndpoints implements CrudEndpoints {
  ALL = environment.API + '/permissions/all';
  BASE = environment.API + '/permissions';
  NEW = '';
}
