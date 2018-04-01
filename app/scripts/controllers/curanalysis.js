'use strict';

/**
 * @ngdoc function
 * @name myForexlkApp.controller:ExgRatesCtrl
 * @description
 * # ExgRatesCtrl
 * Controller of the myForexlkApp
 */
angular.module('myForexlkApp')
    .controller('Analytics', function ($scope, $uibModal, masterCurrencyList, bankList, BankRatesService, bankRatesList) {

        $scope.masterCurrencyList = masterCurrencyList;
        $scope.bankList = bankList;
        $scope.bankSelected = bankList[0];
        $scope.currencySelected = masterCurrencyList[11];
        $scope.ratesOfOtherBanks = undefined;
        BankRatesService.getBankRatesByCurrencyAndBankForCurrentDate($scope.currencySelected.currencyCode, undefined
        ).then(function (response) {
            $scope.ratesOfOtherBanks = response.data;
        }, function (error) {
            //return error.data;
        })

        $scope.todayRateOfSelectedBank = undefined;
        BankRatesService.getBankRatesByCurrencyAndBankForCurrentDate($scope.currencySelected.currencyCode, $scope.bankSelected.bankId).then(function (response) {
            $scope.todayRateOfSelectedBank = response.data[0];
        }, function (error) {
            //return error.data;
        })

        $scope.getFlag = function (flag) {
            return "flag-icon flag-icon-" + flag.toLowerCase();
        }

        $scope.getRateDifference = function () {
            var todayDate = new Date();
            var yesterDate = new Date();

            yesterDate.setDate(yesterDate.getDate() - 1);
            return "flag-icon flag-icon-" + flag.toLowerCase();
        }

        $scope.getBankByBankId = function (bankId) {
            var bankName = undefined;
            angular.forEach(bankList, function (value, key) {
                if (value.bankId == bankId) {
                    bankName = value;
                }
            });
            return bankName
        }

        $scope.setBankSelected = function (bank) {
            $scope.bankSelected = bank;
            BankRatesService.getBankRatesByCurrencyAndBankForCurrentDate($scope.currencySelected.currencyCode, $scope.bankSelected.bankId).then(function (response) {
                $scope.todayRateOfSelectedBank = response.data[0];
            }, function (error) {
                //return error.data;
            })
        }

        $scope.setCurrencySelected = function (currency) {
            $scope.currencySelected = currency;
            BankRatesService.getBankRatesByCurrencyAndBankForCurrentDate(currency.currencyCode, undefined).then(function (response) {
                $scope.ratesOfOtherBanks = response.data;
            }, function (error) {
                //return error.data;
            })
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

        $scope.getBankRatesByCurrencyAndBankForCurrentDate = function (currency, bank) {
            $scope.currencySelected = BankRatesService.getBankRatesByCurrencyAndBankForCurrentDate(currency, bank);
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
