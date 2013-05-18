'use strict';

angular.module('p2pmusicApp')
  .factory('fileService', function () {

    var dirRead = function(element){
      var files;
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
      return files
    };


    // Public API here
    return {
      dirRead: dirRead
    };
  });
