'use strict';

/**
 * @ngdoc service
 * @name myForexlkApp.Currency
 * @description
 * # Currency
 * Service in the myForexlkApp.
 */
angular.module('myForexlkApp')
  .service('CurrencyService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function Currency() {
      this.currencyCode = null;
      this.name = null;
      this.country = null;
      this.flag = null;
    }
    return Currency;
  });