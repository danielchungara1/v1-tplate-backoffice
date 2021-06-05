import {CrudEndpoints} from '@core/search/crud-endpoints';
import {environment} from '@env';

export class BrandEndpoints implements CrudEndpoints {
  ALL = environment.API + '/brands/all';
  BASE = environment.API + '/brands';
  NEW = environment.API + '/brands/new-brand';
}
