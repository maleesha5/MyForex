'use strict';

/**
 * @ngdoc service
 * @name myForexlkApp.Currency
 * @description
 * # Currency
 * Service in the myForexlkApp.
 */
angular.module('myForexlkApp')
    .service('centralBankService', function ($http) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.saveCBRate = function (CBRate) {

            $http.post('http://localhost:8085/cb/create', CBRate).then(
                function (success) {
                    console.log(success);
                }, function (error) {
                    console.log(error);
                });
        }

    });