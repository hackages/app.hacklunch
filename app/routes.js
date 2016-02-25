export default function routes($stateProvider){
  $stateProvider
    .state('home', {
      url: '/',
      template: '<hl-sessions></hl-sessions>'
    })
    .state('sessions', {
      url: '/sessions',
      template: '<hl-sessions></hl-sessions>'
    });
}

routes.$inject = ['$stateProvider'];
