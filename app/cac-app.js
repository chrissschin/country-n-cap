'use strict'


angular.module("cac-app", ['ui.router','ngAnimate'])
  .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url : '/',
      templateUrl : '/app/views/home.html'
    })

    .state('countries', {
      url : '/countries',
      templateUrl : '/app/views/countries.html'
    })

    .state('countriesDetail', {
      url : '/countries/:countryCode',
      templateUrl : '/app/views/countriesDetail.html',
      controller : 'secondCtrl',
      params: {
        country: {}
      }


    })

    $urlRouterProvider.otherwise('/');
  }])
