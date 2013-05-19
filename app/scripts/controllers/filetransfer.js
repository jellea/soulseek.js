'use strict';

angular.module('p2pmusicApp')
  .controller('FiletransferCtrl', function ($scope,$rootScope) {
    $scope.transfers = {};

    $rootScope.$on('rtc-onFileProgress', function(event, data){
      $scope.transfers[data.fileName] = data;
      $scope.$digest();
    });

    $rootScope.$on('rtc-onFileSent', function(event, data){
      $scope.transfers[data.name].finished = true;
      $scope.$digest();
    });


  });
