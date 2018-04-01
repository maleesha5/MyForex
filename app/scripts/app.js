'use strict';

/**
 * @ngdoc overview
 * @name myForexlkApp
 * @description
 * # myForexlkApp
 *
 * Main module of the application.
 */
angular
  .module('myForexlkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          // I will cause a 1 second delay
          masterCurrencyList: function (CurrencyService) {
            return CurrencyService.getMasterCurrencyList().then(function (response) {
              return response.data;
            }, function (error) {
              return error.data;
            })
          },
          bankList: function (BankService) {
            return BankService.getBankList().then(function (response) {
              return response.data;
            }, function (error) {
              return error.data;
            })
          },
          cbRatesList: function (CBRatesService) {
            return CBRatesService.getCBRatesByCurrentDate().then(function (response) {
              return response.data;
            }, function (error) {
              return error.data;
            })
          },
          bankRatesList: function (BankRatesService) {
            return BankRatesService.getBankRatesByCurrentDate().then(function (response) {
              return response.data;
            }, function (error) {
              return error.data;
            })
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/addbankrates', {
        templateUrl: 'views/bank/addRates.html',
        controller: 'AddRatesCtrl',
        controllerAs: ''
      })
      .when('/analytics', {
        templateUrl: 'views/curanalysis.html',
        controller: 'Analytics',
        resolve: {
          // I will cause a 1 second delay
          masterCurrencyList: function (CurrencyService) {
            return CurrencyService.getMasterCurrencyList().then(function (response) {
              return response.data;
            }, function (error) {
              return error.data;
            })
          },
          bankList: function (BankService) {
            return BankService.getBankList().then(function (response) {
              return response.data;
            }, function (error) {
              return error.data;
            })
          },
          bankRatesList: function (BankRatesService) {
            return BankRatesService.getBankRatesByCurrentDate().then(function (response) {
              return response.data;
            }, function (error) {
              return error.data;
            })
          }
        }
      })
      .when('/exgRates', {
        templateUrl: 'views/exgRates.html',
        controller: 'ExgRatesCtrl',
        controllerAs: '',
        resolve: {
          // I will cause a 1 second delay
          masterCurrencyList: function (CurrencyService) {
            return CurrencyService.getMasterCurrencyList().then(function (response) {
              return response.data;
            }, function (error) {
              return error.data;
            })
          },
          bankList: function (BankService) {
            return BankService.getBankList().then(function (response) {
              return response.data;
            }, function (error) {
              return error.data;
            })
          },
          bankRatesList: function (BankRatesService) {
            return BankRatesService.getBankRatesByCurrentDate().then(function (response) {
              return response.data;
            }, function (error) {
              return error.data;
            })
          }
        }
      })
      .when('/addcbrates', {
        templateUrl: 'views/addCBRates.html',
        controller: 'AddCBRatesCtrl',
        controllerAs: '',
        resolve: {
          // I will cause a 1 second delay
          masterCurrencyList: function (CurrencyService) {
            return CurrencyService.getMasterCurrencyList().then(function (response) {
              return response.data;
            }, function (error) {
              return error.data;
            })
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
