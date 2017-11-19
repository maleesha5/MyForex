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
    'firebase',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/analytics', {
        templateUrl: 'views/curanalysis.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/bank', {
        templateUrl: 'views/addBank.html',
        controller: 'BankCtrl',
        controllerAs: 'bank'
      })
      .when('/createAdmin', {
        templateUrl: 'views/createadmin.html',
        controller: 'CreateadminCtrl',
        controllerAs: 'createAdmin'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
