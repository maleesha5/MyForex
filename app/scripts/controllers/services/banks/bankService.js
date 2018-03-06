'use strict';

/**
 * @ngdoc service
 * @name myForexlkApp.Bank
 * @description
 * # Currency
 * Service in the myForexlkApp.
 */
angular.module('myForexlkApp')
  .service('BankService', function ($http) {

    this.getBankList = function(){
      
      return $http.get('http://localhost:8085/bank/getAll');    
    }
    
  });