import angular, {module, bootstrap} from 'angular';

import shell from '../modules/shell/shell';
import routes from './routes';

// Importing modules
import sessions from '../modules/sessions/app/';

module('hacklunch', [routes, sessions]).component('hacklunch', shell);

document.addEventListener('DOMContentLoaded', ()=>{
  bootstrap(document.body, ['hacklunch'], {strictDi: true});
});
