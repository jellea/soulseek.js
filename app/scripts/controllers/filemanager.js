'use strict';

window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

angular.module('p2pmusicApp')
  .controller('FileManagerCtrl', function ($scope, fileService) {
    $scope.setFile = function(element) {
      // asd
      console.log(fileService);
      fileService.dirRead(element);
    };
  });