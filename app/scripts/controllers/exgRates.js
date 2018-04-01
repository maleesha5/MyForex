'use strict';

/**
 * @ngdoc function
 * @name myForexlkApp.controller:ExgRatesCtrl
 * @description
 * # ExgRatesCtrl
 * Controller of the myForexlkApp
 */
angular.module('myForexlkApp')
  .controller('ExgRatesCtrl', function ($scope, $uibModal, masterCurrencyList, bankList) {

    $scope.masterCurrencyList = masterCurrencyList;
    $scope.bankList = bankList;
    $scope.bankSelected = bankList[0];

    $scope.getFlag = function (flag) {
      return "flag-icon flag-icon-" + flag.toLowerCase();
    }

    $scope.getRateForCurrency = function (currencyCode) {
    }

    $scope.setBankSelected = function (bank) {
      $scope.bankSelected = bank;
    }

    $scope.getBankSellRateForCurrency = function (bank, currency) {

      var currentSellRate = 1;
      angular.forEach(bankRatesList, function (value, key) {

        if (value.bankId == bank.bankId && value.currerncyMaster.currencyCode == currency.currencyCode) {

          currentSellRate = value.sellRate;
        }
      });
      return currentSellRate;
    }

    $scope.getBankBuyRateForCurrency = function (bank, currency) {

      var currentBuyRate = 1;
      angular.forEach(bankRatesList, function (value, key) {

        if (value.bankId == bank.bankId && value.currerncyMaster.currencyCode == currency.currencyCode) {

          currentBuyRate = value.buyRate;
        }
      });
      return currentBuyRate;
    }

  });
