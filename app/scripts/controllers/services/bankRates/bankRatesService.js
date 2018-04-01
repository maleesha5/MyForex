'use strict';

/**
 * @ngdoc service
 * @name myForexlkApp.BankRates
 * @description
 * # BankRates
 * Service in the myForexlkApp.
 */
angular.module('myForexlkApp')
  .service('BankRatesService', function ($http) {

    this.getAllBankRates = function () {

      return $http.get('http://localhost:8085/bankRates/getAll');
    }

    this.getBankRatesByCurrentDate = function () {

      return $http.get('http://localhost:8085/bankRates/currentdate');
    }

    this.getBankRatesByCurrencyAndBankForCurrentDate = function (code, bank) {
      if (bank) {
        return $http.get('http://localhost:8085/bankRates/currency/code/' + code + '?bank=' + bank);
      } else {
        return $http.get('http://localhost:8085/bankRates/currency/code/' + code);
      }
    }



  });