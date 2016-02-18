export default function routes($stateProvider){
  $stateProvider
    .state('home', {
      url: '/',
      template: '<hacklunch></hacklunch>'
    });
}

routes.$inject = ['$stateProvider'];
