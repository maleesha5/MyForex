'use strict';

/**
 * @ngdoc service
 * @name myForexlkApp.Currency
 * @description
 * # Currency
 * Service in the myForexlkApp.
 */
angular.module('myForexlkApp')
  .service('CentralBankRate', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function CentralBankRate() {
      this.cbDate = null;
      this.currerncyMaster = null;
      this.buyRate = null;
      this.sellRate = null;
    }
    return CentralBankRate;
  });