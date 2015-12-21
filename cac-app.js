angular.module("cac-app", ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url : '/',
      templateUrl : 'home.html'
    })

    .state('countrylist', {
      url : '/countrylist',
      templateUrl : 'countrylist.html'
    })

    .state('countrydetail', {
      url : '/countrydetail',
      templateUrl : 'countrydetail.html'
    })

    $urlRouterProvider.otherwise('/');
  }])
  .controller('mainCtrl', function(){
    console.log("hello");
  });
