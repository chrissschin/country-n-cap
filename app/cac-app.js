'use strict'


angular.module("cac-app", ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url : '/',
      templateUrl : '/app/views/home.html'
    })

    .state('countrylist', {
      url : '/countrylist',
      templateUrl : '/app/views/countrylist.html'
    })

    .state('countrydetail', {
      url : '/countrydetail',
      templateUrl : '/app/views/countrydetail.html'
    })

    $urlRouterProvider.otherwise('/');
  }])
