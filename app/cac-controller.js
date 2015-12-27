'use strict'

angular.module("cac-app")
  .controller('mainCtrl', function($scope, countryInfoFactory) {
    console.log("hello");
    var countryInfo = countryInfoFactory.then(function(response){
      console.log(response.data.geonames);
      $scope.countryInfo = response.data.geonames;
    });
  });
