import angular, {module, bootstrap} from 'angular';
import 'angular-ui-router';

import shell from '../modules/shell/shell';
import routes from './routes';

// Importing modules
import '../modules/session.hacklunch/dist/';

module('hacklunch', ['ui.router', 'hl.sessions'])
  .config(routes)
  .component('hacklunch', shell);


document.addEventListener('DOMContentLoaded', ()=>{
  bootstrap(document.body, ['hacklunch'], {strictDi: true});
});
