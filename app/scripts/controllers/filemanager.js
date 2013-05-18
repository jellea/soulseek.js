'use strict';

window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

angular.module('p2pmusicApp')
  .controller('FileManagerCtrl', function ($scope, fileService) {
    $scope.setFile = function(element) {
      fileService.dirRead(element, $scope.updateFileList);
    };

    $scope.updateFileList = function(fileList) {
      $scope.fileList = fileList;
      console.log(fileList);
    };
  });