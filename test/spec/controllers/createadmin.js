'use strict';

describe('Controller: CreateadminCtrl', function () {

  // load the controller's module
  beforeEach(module('myForexlkApp'));

  var CreateadminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateadminCtrl = $controller('CreateadminCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateadminCtrl.awesomeThings.length).toBe(3);
  });
});
