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

    var sl = { "country": "Sri Lanka", "currencyCode": "LKR", "flag": "LK", "name": "Sri Lankan Rupees" };
    var us = { "country": "United States of America", "currencyCode": "USD", "flag": "US", "name": "United States Dollar" };

    $scope.masterCurrencyList = masterCurrencyList;

    $scope.bankList = bankList;

    $scope.cbRatesList = cbRatesList;

    $scope.getFlag = function (flag) {
      return "flag-icon flag-icon-" + flag.toLowerCase();
    }

    $scope.toCurrency = sl;
    $scope.fromCurrency = us;
    $scope.currencyVal = 0;
    $scope.resultAmount = 1;
    $scope.fromAmount = 1;
    $scope.bankSelected;
    $scope.currencySymbol = "LKR";

    $scope.setFromCurrency = function (currency) {
      $scope.fromCurrency = currency;
      $scope.fromCurrencyOnChange();
    }

    $scope.setToCurrency = function (currency) {
      $scope.toCurrency = currency;
      $scope.toCurrencyOnChange();
    }

    $scope.calculateResultAmount = function () {
      if ($scope.fromCurrency.currencyCode != "LKR") {
        $scope.resultAmount = $scope.fromAmount * $scope.currencyVal;
        $scope.currencySymbol = $scope.toCurrency.currencyCode;
      } else {
        $scope.resultAmount = $scope.fromAmount / $scope.currencyVal;
        $scope.currencySymbol = $scope.toCurrency.currencyCode;
      }

    }

    $scope.toCurrencyOnChange = function () {
      var notFoundRate = true;
      if ($scope.fromCurrency && !$scope.bankSelected) {

        angular.forEach($scope.cbRatesList, function (value, key) {
          if (value.currerncyMaster.currencyCode == $scope.toCurrency.currencyCode) {
            $scope.currencyVal = value.sellRate;
            notFoundRate = false;
          }
        });
        //$scope.resultAmount = $scope.fromAmount / $scope.currencyVal;
      }
      if (notFoundRate) {
        $scope.currencyVal = 0;
      }
      $scope.calculateResultAmount();
    }

    $scope.fromCurrencyOnChange = function () {
      var notFoundRate = true;
      if ($scope.fromCurrency && $scope.bankSelected) {
        $scope.currencyVal = $scope.getBankBuyRateForCurrency($scope.bankSelected, $scope.fromCurrency);
        //$scope.resultAmount = $scope.fromAmount * $scope.currencyVal;
        notFoundRate = false;

      } else if ($scope.fromCurrency && !$scope.bankSelected) {
        angular.forEach($scope.cbRatesList, function (value, key) {

          if (value.currerncyMaster.currencyCode == $scope.fromCurrency.currencyCode) {
            $scope.currencyVal = value.buyRate;
            notFoundRate = false;

          }
        });
        // $scope.resultAmount = $scope.fromAmount * $scope.currencyVal;
      }
      if (notFoundRate) {
        $scope.currencyVal = 0;
      }
      $scope.calculateResultAmount();
    }

    $scope.getRateForCurrency = function (currencyCode) {
    }

    $scope.setBankSelected = function (bank) {
      $scope.bankSelected = bank;
      $scope.fromCurrencyOnChange();
      $scope.calculateResultAmount();
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

    $scope.fromCurrencyOnChange();

  });
