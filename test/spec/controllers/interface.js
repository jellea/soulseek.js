'use strict';

describe('Controller: InterfaceCtrl', function () {

  // load the controller's module
  beforeEach(module('p2pmusicApp'));

  var InterfaceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InterfaceCtrl = $controller('InterfaceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
