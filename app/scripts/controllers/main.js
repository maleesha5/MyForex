'use strict';

/**
 * @ngdoc function
 * @name myForexlkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myForexlkApp
 */
angular.module('myForexlkApp')
  .controller('MainCtrl', function ($scope,$uibModal) {

    $scope.openModal = function(){
      console.log('Open Modal');
    };

    var $ctrl = this;
    $scope.items = ['item1', 'item2', 'item3'];
  
    $scope.animationsEnabled = true;
  
    $scope.open = function (size, parentSelector) {
      var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
       // controllerAs: '$ctrl',
        size: size,
        appendTo: parentElem,
        resolve: {
          items: function () {
            return $ctrl.items;
          }
        }
      });
    };

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
