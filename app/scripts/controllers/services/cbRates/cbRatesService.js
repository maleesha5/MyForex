'use strict';

/**
 * @ngdoc service
 * @name myForexlkApp.CBRates
 * @description
 * # Currency
 * Service in the myForexlkApp.
 */
angular.module('myForexlkApp')
  .service('CBRatesService', function ($http) {

    this.getCBRatesList = function(){
      
      return $http.get('http://localhost:8085/cb/getCBRates');    
    }

    this.getCBRatesByCurrentDate = function(){
      
      return $http.get('http://localhost:8085/cb/getCBRates/currentdate');    
    }
    
  });