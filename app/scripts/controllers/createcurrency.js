'use strict';

/**
 * @ngdoc function
 * @name myForexlkApp.controller:CreatecurrencyCtrl
 * @description
 * # CreatecurrencyCtrl
 * Controller of the myForexlkApp
 */
angular.module('myForexlkApp')
  .controller('CreatecurrencyCtrl', function ($scope, $firebaseArray, Currency) {
    debugger
    $scope.currency = new Currency();
    var ref = firebase.database().ref().child("currencies");
    // create a synchronized array
    
    $scope.currencies = $firebaseArray(ref);
    $scope.currencies.$loaded()
    .then(function(data) {
      debugger
      console.log(data); // true
    })
    .catch(function(error) {
      console.error("Error:", error);
    });
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addCurrency = function() {
      debugger
      $scope.currencies.$add($scope.currency).then(function(ref) {
        debugger
        var id = ref.key;
        console.log("added record with id " + id);
        console.log($scope.currencies.$indexFor(id)); // returns location in the array
      });
    };

  });
