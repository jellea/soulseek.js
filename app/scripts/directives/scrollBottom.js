'use strict';

angular.module('p2pmusicApp')
  .directive('scrollBottom', function () {
    return {
      template: '',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        scope.$watch('msgs', function() {
          element.scrollTop(element.get(0).scrollHeight);
        }, true);

      }
    };
  });
