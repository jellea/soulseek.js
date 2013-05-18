'use strict';

angular.module('p2pmusicApp')
  .controller('LoginCtrl', function ($scope, fileService) {

    $scope.initialized = false;
    $scope.showFiles = false;

    $scope.setUsername = function() {

      mainChannel.userid = $scope.username;
      $scope.username = '';

      $scope.showFiles = true;

    };

    $scope.setFiles = function(element) {

      fileService.dirRead(element, $scope.filesComplete);

      mainChannel.connect('2');
      $scope.initialized = true;
      $scope.$digest();

    };

    $scope.filesComplete = function() {
    };

  });
