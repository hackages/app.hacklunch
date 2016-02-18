import angular, {module, bootstrap} from 'angular';
import 'angular-ui-router';

import shell from '../modules/shell/shell';
import routes from './routes';

module('hacklunch', ['ui.router'])
  .config(routes)
  .component('hacklunch', shell);


document.addEventListener('DOMContentLoaded', ()=>{
  bootstrap(document.body, ['hacklunch'], {strictDi: true});
});
