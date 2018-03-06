'use strict';

/**
 * @ngdoc service
 * @name myForexlkApp.User
 * @description
 * # User
 * Service in the myForexlkApp.
 */
angular.module('myForexlkApp')
  .service('User', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function User() {
      this.firstName = undefined;
      this.lastName = undefined;
      this.email = undefined;
      this.lastLogin = null;
    }
    return User;
  });
