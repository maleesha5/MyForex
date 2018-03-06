'use strict';

/**
 * @ngdoc function
 * @name myForexlkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myForexlkApp
 */
angular.module('myForexlkApp')
  .controller('MainCtrl', function ($scope, $uibModal, masterCurrencyList, bankList, cbRatesList, bankRatesList) {

    $scope.masterCurrencyList = masterCurrencyList;

    $scope.bankList = bankList;

    $scope.cbRatesList = cbRatesList;

    $scope.getFlag = function (flag) {
      return "flag-icon flag-icon-" + flag.toLowerCase();
    }

    $scope.toCurrency;
    $scope.fromCurrency = {"country":"Sri Lanka","currencyCode":"LKR","flag":"LK","name":"Sri Lankan Rupees"};
    $scope.currencyVal = 1;
    $scope.toAmount = 0;
    $scope.fromAmount;
    $scope.bankSelected;


    $scope.setFromCurrency = function (currency) {
      debugger
      $scope.fromCurrency = currency;
      $scope.fromCurrencyOnChange();
    }

    $scope.setToCurrency = function (currency) {
      $scope.toCurrency = currency;
      $scope.toCurrencyOnChange();
    }

    /*$scope.toCurrencyOnChange = function () {
      if ($scope.fromCurrency && !$scope.bankSelected) {

        angular.forEach($scope.cbRatesList, function (value, key) {
          
          if (value.currerncyMaster.currencyCode == $scope.fromCurrency.currencyCode) {
            $scope.currencyVal = value.sellRate;
          }
        });
        $scope.fromAmount = $scope.toAmount * $scope.currencyVal;
      }
    }*/

    $scope.fromCurrencyOnChange = function () {
      if ($scope.fromCurrency && $scope.bankSelected) {
        debugger
        $scope.currencyVal = $scope.getBankBuyRateForCurrency($scope.bankSelected, $scope.fromCurrency);
        $scope.toAmount = $scope.fromAmount * $scope.currencyVal;

      } else if ($scope.fromCurrency && !$scope.bankSelected) {
        angular.forEach($scope.cbRatesList, function (value, key) {

          if (value.currerncyMaster.currencyCode == $scope.fromCurrency.currencyCode) {
            $scope.currencyVal = value.buyRate;
          }
        });
        $scope.toAmount = $scope.fromAmount * $scope.currencyVal;
      }
    }

    $scope.getRateForCurrency = function (currencyCode) {
    }

    $scope.setBankSelected = function (bank) {
      $scope.bankSelected = bank;
      $scope.fromCurrencyOnChange();
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
