'use strict';

describe('Controller: FiletransferCtrl', function () {

  // load the controller's module
  beforeEach(module('p2pmusicApp'));

  var FiletransferCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FiletransferCtrl = $controller('FiletransferCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
