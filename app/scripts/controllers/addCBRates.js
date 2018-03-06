'use strict';

/**
 * @ngdoc function
 * @name myForexlkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myForexlkApp
 */
angular.module('myForexlkApp')
  .controller('AddCBRatesCtrl', function ($scope, CentralBankRate, centralBankService, masterCurrencyList, Currency) {

    $scope.masterCurrencyList = masterCurrencyList;
    /*var currenDate = new Date();
    var year = dateObject.getFullYear();
    var month = dateObject.getMonth() + 1;
    var date = dateObject.getDate();
    $scope.date = year + "-" + month + "-" + date;*/

    $scope.cbRate = new CentralBankRate();
    $scope.cbRate.cbDate = "2018-12-03";
    $scope.cbRate.currerncyCode = "CAD";
    $scope.cbRatesList = [];

    $scope.saveCBRates = function () {
      centralBankService.saveCBRate($scope.cbRatesList);
    }

    function convertDate(date) {
      var yyyy = date.getFullYear().toString();
      var mm = (date.getMonth() + 1).toString();
      var dd = date.getDate().toString();

      var mmChars = mm.split('');
      var ddChars = dd.split('');

      return yyyy + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + (ddChars[1] ? dd : "0" + ddChars[0]);
    }

    $scope.getFlag = function (flag) {
      return "flag-icon flag-icon-" + flag.toLowerCase();
    }

    $scope.fromCurrency;

    $scope.setFromCurrency = function (currency) {
      $scope.fromCurrency = currency;
    }

    $scope.addToTempCBRatesList = function (rate, currencyCode) {

      var isDeleted = false;
      var currency = new Currency();
      currency = currencyCode;

      var cbRate = new CentralBankRate();

      cbRate.currerncyMaster = currency;
      cbRate.buyRate = rate.buyRate;
      cbRate.sellRate = rate.sellRate;
      cbRate.cbDate = convertDate(new Date());
      $scope.cbRatesList.push(cbRate);

      $scope.masterCurrencyList = $scope.masterCurrencyList.filter(function (currency) {
        return currency.currencyCode != currencyCode.currencyCode;
      });
    }

  })
