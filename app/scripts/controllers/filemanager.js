'use strict';

window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem; 
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

window.files = [];


var testFileSend = function (file){
  var reader = new window.FileReader();
  reader.readAsDataURL(file);
  reader.onload = onReadAsDataURL;
}

angular.module('p2pmusicApp')
  .controller('FilemanagerCtrl', function ($scope, mainChannel) {
    $scope.setFile = function(element) {
      $scope.$apply(function($scope) {
        $scope.files = files.length;

        var entries = element.webkitEntries;

        var errorHandler = function(error){console.log(error)};

        var readPath = function(path){
          if(path.isDirectory){
            var dirReader = path.createReader();

            dirReader.readEntries(function(results)
            {
              for (var i = 0; i < results.length; ++i)
              {
                readPath(results[i]);
              };
            }, errorHandler);
          }else{
            $scope.files++;
            files.push(path);
          }
        }

        setTimeout(function streamTrack (){
          console.log(files[0].fullPath);
          testFileSend(files[0]);
        }
        ,200)

        for (var i = 0; i < entries.length; ++i) {
          readPath(entries[i]);
        }
      });
    };
  });

  
