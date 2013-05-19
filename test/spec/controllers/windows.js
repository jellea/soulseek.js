'use strict';

describe('Controller: WindowsCtrl', function () {

  // load the controller's module
  beforeEach(module('p2pmusicApp'));

  var WindowsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WindowsCtrl = $controller('WindowsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
