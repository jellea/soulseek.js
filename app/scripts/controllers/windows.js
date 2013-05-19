'use strict';

angular.module('p2pmusicApp')
  .controller('WindowsCtrl', function ($scope, $rootScope) {

    $scope.keyDownHandler = function(e) {
      // switch keyCode statement here.
    };

    $scope.broadcastClose = function() {

      console.log('closeWindows');

      $scope.$broadcast('closeWindows');

    };

    $scope.$on('interfaceClick', $scope.broadcastClose);
    $scope.$on('click', $scope.broadcastClose);
    $scope.$on('keyDown', $scope.keyDownHandler);
  });
