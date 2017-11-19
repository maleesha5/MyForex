'use strict';

describe('Service: Bank', function () {

  // load the service's module
  beforeEach(module('myForexlkApp'));

  // instantiate service
  var Bank;
  beforeEach(inject(function (_Bank_) {
    Bank = _Bank_;
  }));

  it('should do something', function () {
    expect(!!Bank).toBe(true);
  });

});
