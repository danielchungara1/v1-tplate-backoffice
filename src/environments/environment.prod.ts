
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {name, version} from '../../package.json';

export const environment = {
  production: true,
  NAME: name,
  VERSION: version,
  API: 'https://v1-tplate-ws.herokuapp.com/api/v1',
};
