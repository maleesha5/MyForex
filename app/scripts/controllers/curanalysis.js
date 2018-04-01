'use strict';

/**
 * @ngdoc function
 * @name myForexlkApp.controller:ExgRatesCtrl
 * @description
 * # ExgRatesCtrl
 * Controller of the myForexlkApp
 */
angular.module('myForexlkApp')
    .controller('Analytics', function ($scope, $filter, $uibModal, masterCurrencyList, bankList, BankRatesService, bankRatesList) {

        $scope.masterCurrencyList = masterCurrencyList;
        $scope.bankList = bankList;
        $scope.bankSelected = bankList[0];
        $scope.currencySelected = masterCurrencyList[11];
        $scope.ratesOfOtherBanks = undefined;
        $scope.calculatedDiff = undefined;

        BankRatesService.getBankRatesByCurrencyAndBankForCurrentDate($scope.currencySelected.currencyCode, undefined
        ).then(function (response) {
            $scope.ratesOfOtherBanks = response.data;
        }, function (error) {
            //return error.data;
        })

        $scope.ratesForPastThreeMonths = undefined;
        BankRatesService.getRatesByBankAndCurrencyForPastThreeMonths($scope.bankSelected.bankId, $scope.currencySelected.currencyCode
        ).then(function (response) {
            $scope.ratesForPastThreeMonths = $filter('orderBy')(response.data, 'currerncyMaster.date');;
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

        $scope.setRateDifference = function () {
            var todayDate = new Date();
            var yesterDate = new Date();

            var todayRate = undefined
            var yesterdayRate = undefined;
            var calculatedDiff = {};

            yesterDate.setDate(yesterDate.getDate() - 1);

            angular.forEach($scope.ratesForPastThreeMonths, function (value, key) {
                if (value.date == $filter('date')(todayDate, "yyyy-MM-dd")) {
                    todayRate = value;
                } else if (value.date == $filter('date')(yesterDate, "yyyy-MM-dd")) {
                    yesterdayRate = value;
                }
            });

            if (todayRate && yesterdayRate) {
                calculatedDiff.buyRateDiff = todayRate.buyRate - yesterdayRate.buyRate;
                if (calculatedDiff.buyRateDiff > 0) {
                    calculatedDiff.buyRateStyle = {color: 'green'};
                    calculatedDiff.buyRateDiffPositive = true;
                } else {
                    calculatedDiff.buyRateStyle = {color: 'red'};
                    calculatedDiff.buyRateDiffPositive = false;
                }
                calculatedDiff.buyRateDiff = Math.abs(calculatedDiff.buyRateDiff);

                calculatedDiff.sellRateDiff = todayRate.sellRate - yesterdayRate.sellRate;
                if (calculatedDiff.sellRateDiff > 0) {
                    calculatedDiff.sellRateStyle = {color: 'green'};
                    calculatedDiff.sellRateDiffPositive = true;
                } else {
                    calculatedDiff.sellRateStyle = {color: 'red'};
                    calculatedDiff.sellRateDiffPositive = false;
                }
                calculatedDiff.sellRateDiff = Math.abs(calculatedDiff.sellRateDiff);
            }
        
            $scope.calculatedDiff = calculatedDiff;
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
            BankRatesService.getRatesByBankAndCurrencyForPastThreeMonths($scope.bankSelected.bankId, $scope.currencySelected.currencyCode
            ).then(function (response) {
                $scope.ratesForPastThreeMonths = response.data;
            }, function (error) {
                //return error.data;
            })
            $scope.setRateDifference();
        }

        $scope.setCurrencySelected = function (currency) {
            $scope.currencySelected = currency;
            BankRatesService.getBankRatesByCurrencyAndBankForCurrentDate(currency.currencyCode, undefined).then(function (response) {
                $scope.ratesOfOtherBanks = response.data;
            }, function (error) {
                //return error.data;
            })
            BankRatesService.getRatesByBankAndCurrencyForPastThreeMonths($scope.bankSelected.bankId, $scope.currencySelected.currencyCode
            ).then(function (response) {
                $scope.ratesForPastThreeMonths = response.data;
            }, function (error) {
                //return error.data;
            })
            $scope.setRateDifference();
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

        $scope.setLatestRatesForPastSixDays = function () {

            angular.forEach($scope.ratesForPastThreeMonths, function (value, key) {

                if (value.bankId == bank.bankId && value.currerncyMaster.currencyCode == currency.currencyCode) {

                    currentBuyRate = value.buyRate;
                }
            });
            return currentBuyRate;
        }

    });
