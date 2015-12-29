'use strict'

angular.module("cac-app")
  .controller('mainCtrl', function($http, $scope, countryInfoFactory) {
    console.log("controller loaded");
    var countryInfo = countryInfoFactory.then(function(response){
      // console.log(response.data.geonames);
      $scope.countryInfo = response.data.geonames;
    });


    $scope.getCountryInfo = function(country) {
      $scope.countryName = country.countryName;
      $scope.population = country.population;
      $scope.capital = country.capital;
      console.log(country.capital);
      $scope.areaInSqKm = country.areaInSqKm;
      $scope.countryCode = country.countryCode;

      var geoNamesId = country.geonameId;

      $http.jsonp('http://api.geonames.org/searchJSON?&q='+ country.capital +'&name_equals='+country.capital+'&isNameRequired=true&username=chrissschin&callback=JSON_CALLBACK')
      .then(function(response){
        console.log(response.data.geonames[0].population);
        $scope.capitalPop = response.data.geonames[0].population;
      });

      $http.jsonp('http://api.geonames.org/neighboursJSON?geonameId='+ geoNamesId +'&username=chrissschin&callback=JSON_CALLBACK')
      .then(function(response){
        console.log(response.data.geonames);
        $scope.neighbours = response.data.geonames;

      });
    }


  })
  .controller('secondCtrl', function($stateParams) {
    console.log($stateParams);
  });

// http://api.geonames.org/searchJSON?q=london&maxRows=10&username=demo
