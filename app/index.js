import angular, {module, bootstrap} from 'angular';

import shell from '../modules/shell/shell';
import routes from './routes';

// Importing modules
import sessions from '../modules/sessions/dist/';
console.log(sessions)

module('hacklunch', [routes, 'hl.sessions']).component('hacklunch', shell);


document.addEventListener('DOMContentLoaded', ()=>{
  bootstrap(document.body, ['hacklunch'], {strictDi: true});
});
