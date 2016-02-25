import angular, {module, bootstrap} from 'angular';

import shell from '../modules/shell/shell';
import routes from './routes';

// Importing modules
import sessions from '../modules/session.hacklunch/dist/';

module('hacklunch', [routes, sessions]).component('hacklunch', shell);


document.addEventListener('DOMContentLoaded', ()=>{
  bootstrap(document.body, ['hacklunch'], {strictDi: true});
});
