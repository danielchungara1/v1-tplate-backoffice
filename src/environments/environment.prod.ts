import {name, version} from '../../package.json';

export const environment = {
  production: true,
  NAME: name,
  VERSION: version,
  API: 'http://localhost:8080/api/v1',
  REST_USER: '',
  REST_CORE: '',
  REST_CUSTOMER_SUPPORT: '',
};
