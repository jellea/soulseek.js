'use strict';

angular.module('p2pmusicApp')
  .factory('fileService', function () {

    var ownFiles = [];

    var dirRead = function(element, callback){
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
          ownFiles.push(path);
        }
      }

      setTimeout(function streamTrack (){
        console.log(ownFiles[0].fullPath);
      }
      ,200)

      for (var i = 0; i < entries.length; ++i) {
        readPath(entries[i]);
      }

      callback(ownFiles)
    };


    // Public API here
    return {
      dirRead: dirRead,
      ownFiles: ownFiles
    };
});
