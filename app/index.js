import angular, {module, bootstrap} from 'angular';


module('hacklunch', []);

document.addEventListener('DOMContentLoaded', ()=>{
  bootstrap(document.body, ['hacklunch'], {strictDi: true});
});
