'use strict';

angular.module('p2pmusicApp')
  .controller('LoginCtrl', function ($scope, RTCService, fileService) {

    $scope.initialized = false;
    $scope.showFiles = false;

    // $scope.username = $cookieStore.get('username');

    // if($scope.username.length > 0)
    // {
    //   $scope.setUsername();
    // }

    $scope.setUsername = function() {

      RTCService.setupDataChannel($scope.username);
      // $cookieStore.put('username', $scope.username);

      $scope.showFiles = true;
      $scope.username = '';

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
