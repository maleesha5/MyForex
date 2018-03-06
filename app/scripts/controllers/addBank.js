'use strict';

/**
 * @ngdoc function
 * @name myForexlkApp.controller:AboutCtrl
 * @description
 * # bank
 * Controller of the myForexlkApp
 */
angular.module('myForexlkApp')
  .controller('BankCtrl', function ($scope, $firebaseArray, Bank, $firebaseAuth) {
  
    $scope.bank = new Bank();
    var ref = firebase.database().ref().child("banks");
    // create a synchronized array
    $scope.banks = $firebaseArray(ref);
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addBank = function() {
      $scope.banks.$add( $scope.bank);
    };
    // click on `index.html` above to see $remove() and $save() in action  

  });