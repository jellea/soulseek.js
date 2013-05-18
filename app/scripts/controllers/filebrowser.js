'use strict';

angular.module('p2pmusicApp')
  .controller('FileBrowserCtrl', function ($scope, $rootScope) {

    $scope.showFileBrowser = false;
    $scope.userid = "";

    $scope.download = function(){
      mainChannel.channels[$scope.userid].send({requestFile: this.file})
    }

    $scope.stream = function(){
      console.log(this.file);
    }

    $rootScope.$on('rtc-gotFileList', function(event, data) {
      $scope.showFileBrowser = true;
      $scope.userid = data.userid;
      $scope.files = data.files;
      $scope.$digest();
    });

  });
