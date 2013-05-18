'use strict';

describe('Directive: fileDrop', function () {
  beforeEach(module('p2pmusicApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<file-drop></file-drop>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the fileDrop directive');
  }));
});
