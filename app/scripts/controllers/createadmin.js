'use strict';

/**
 * @ngdoc function
 * @name myForexlkApp.controller:CreateadminCtrl
 * @description
 * # CreateadminCtrl
 * Controller of the myForexlkApp
 */
angular.module('myForexlkApp')
  .controller('CreateadminCtrl', function ($scope, $firebaseArray, User) {
    $scope.user = new User();
    var ref = firebase.database().ref().child("users");
    // create a synchronized array
    $scope.users = $firebaseArray(ref);
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addUser = function() {
      $scope.users.$add( $scope.user);
    };

  });
