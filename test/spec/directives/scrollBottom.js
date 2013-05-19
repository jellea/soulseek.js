'use strict';

describe('Directive: scrollBottom', function () {
  beforeEach(module('p2pmusicApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<scroll-bottom></scroll-bottom>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the scrollBottom directive');
  }));
});
