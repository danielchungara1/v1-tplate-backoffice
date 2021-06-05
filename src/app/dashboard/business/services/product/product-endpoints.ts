import {CrudEndpoints} from '@core/search/crud-endpoints';
import {environment} from '@env';

export class ProductEndpoints implements CrudEndpoints {
  ALL = environment.API + '/products/all';
  BASE = environment.API + '/products';
  NEW = environment.API + '/products/new-product';
}
