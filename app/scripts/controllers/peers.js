'use strict';

angular.module('p2pmusicApp')
  .controller('PeersCtrl', function ($scope, $rootScope) {

    $scope.peers = [];

    $rootScope.$on('rtc-onopen', function(event, data)
    {
      $scope.peers.push(data);
      $scope.$digest();
    });

    $rootScope.$on('rtc-onclose', function(event, data)
    {
      console.log(data);
      for (i = 0; i < $scope.peers.length; i++) {
        peer = $scope.peers[i];
        if (peer === data.user) {
          $scope.peers.splice(i, 1);
          break;
        }
      }
      $scope.$digest();
    });

  });
