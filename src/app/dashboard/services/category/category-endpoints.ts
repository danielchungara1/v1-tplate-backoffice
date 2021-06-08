import {CrudEndpoints} from '@core/crud/crud-endpoints';
import {environment} from '@env';

export class CategoryEndpoints implements CrudEndpoints {
  ALL = environment.API + '/categories/all';
  BASE = environment.API + '/categories';
  NEW = environment.API + '/categories/new-category';
}
