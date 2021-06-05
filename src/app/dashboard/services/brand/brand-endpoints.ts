import {CrudEndpoints} from '@core/crud/crud-endpoints';
import {environment} from '@env';

export const BrandEndpoints: CrudEndpoints = {
  ALL: environment.API + '/brands/all',
  BASE: environment.API + '/brands',
  NEW: environment.API + '/brands/new-brand',
};
