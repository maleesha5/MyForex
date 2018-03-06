'use strict';

describe('Controller: CreatecurrencyCtrl', function () {

  // load the controller's module
  beforeEach(module('myForexlkApp'));

  var CreatecurrencyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatecurrencyCtrl = $controller('CreatecurrencyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreatecurrencyCtrl.awesomeThings.length).toBe(3);
  });
});
