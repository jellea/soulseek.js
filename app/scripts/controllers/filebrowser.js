'use strict';

angular.module('p2pmusicApp')
  .controller('FileBrowserCtrl', function ($scope, $rootScope) {

    $scope.showFiles = false;

    $rootScope.$on('rtc-gotFilelist', function(event, data)
    {
      $scope.showFiles = true;
    });

  });
