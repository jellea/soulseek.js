'use strict';

angular.module('p2pmusicApp')
  .controller('PlayerCtrl', function ($scope, playerService) {

    $scope.isPlaying = false;

    $scope.togglePlaying = function() {
      $scope.isPlaying = !$scope.isPlaying;
    }

  });
