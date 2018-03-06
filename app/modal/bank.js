'use strict';

/**
 * @ngdoc service
 * @name myForexlkApp.Bank
 * @description
 * # Bank
 * Service in the myForexlkApp.
 */
angular.module('myForexlkApp')
  .service('Bank', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function Bank() {
      this.bankName = undefined;
      this.bankaddress = undefined;
      this.contactNum = undefined;
      this.logo = undefined;
    }
    return Bank;
  });
