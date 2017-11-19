'use strict';

/**
 * @ngdoc function
 * @name myForexlkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myForexlkApp
 */
angular.module('myForexlkApp')
  .controller('MainCtrl', function ($scope, $uibModal, $firebaseObject, $firebaseArray) {
    debugger
    $scope.name = "maleesha";


    var ref = firebase.database().ref();
    // download the data into a local object
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "data");

    syncObject.$loaded()
    .then(function() {
      console.log($scope.data);
    })
    .catch(function(err) {
      console.error(err);
    });

  });
