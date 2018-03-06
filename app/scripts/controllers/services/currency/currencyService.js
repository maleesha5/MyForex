'use strict';

/**
 * @ngdoc service
 * @name myForexlkApp.Currency
 * @description
 * # Currency
 * Service in the myForexlkApp.
 */
angular.module('myForexlkApp')
  .service('CurrencyService', function ($http) {

    this.getMasterCurrencyList = function(){
      
      return $http.get('http://localhost:8085/currency/getAll');    
    }
    
  });