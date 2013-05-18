'use strict';

angular.module('p2pmusicApp')
  .controller('FileBrowserCtrl', function ($scope, $rootScope) {

    $scope.showFiles = false;

    $rootScope.$on('rtc-gotFileList', function(event, data)
    {
      console.log(data);
      $scope.showFiles = true;
    });

  });
