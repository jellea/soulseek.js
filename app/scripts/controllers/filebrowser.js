'use strict';

angular.module('p2pmusicApp')
  .controller('FileBrowserCtrl', function ($scope, $rootScope) {

    $scope.showFileBrowser = false;

    $rootScope.$on('rtc-gotFileList', function(event, data) {


      $scope.showFileBrowser = true;
      $scope.$digest();

    $rootScope.$on('rtc-gotFileList', function(event, data)
    {
      console.log(data);
      $scope.showFiles = true;
    });

  });
