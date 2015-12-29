'use strict'

angular.module("cac-app")
  .factory("countryInfoFactory",function($http) {
    return $http.jsonp('http://api.geonames.org/countryInfoJSON?username=chrissschin&callback=JSON_CALLBACK')

  })
