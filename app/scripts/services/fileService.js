'use strict';

angular.module('p2pmusicApp')
  .factory('fileService', function ($rootScope) {

    function DnDFileController(selector, onDropCallback) {
      console.log('init dnd');
      var el_ = document.querySelector(selector);

      this.dragenter = function(e) {
        e.stopPropagation();
        e.preventDefault();
        el_.classList.add('dropping');
      };

      this.dragover = function(e) {
        e.stopPropagation();
        e.preventDefault();
      };

      this.dragleave = function(e) {
        e.stopPropagation();
        e.preventDefault();
        //el_.classList.remove('dropping');
      };

      this.drop = function(e) {
        e.stopPropagation();
        e.preventDefault();

        el_.classList.remove('dropping');
        onDropCallback(e.dataTransfer.files, e);
      };

      el_.addEventListener('dragenter', this.dragenter, false);
      el_.addEventListener('dragover', this.dragover, false);
      el_.addEventListener('dragleave', this.dragleave, false);
        el_.addEventListener('drop', this.drop, false);
      };

    var dnd = new DnDFileController('body', function(files, e) {
        var items = e.dataTransfer.items;
        dirRead(items, function(result){
          $rootScope.$broadcast('file-Drop', result);});
      });

    window.ownFiles = [];

    var dirRead = function(entries, callback){
      var entries = entries

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

      for (var i = 0; i < entries.length; ++i) {
        readPath(entries[i].webkitGetAsEntry());
      }

      callback(ownFiles)
    };

    // Public API here
    return {
      dnd: dnd,
      dirRead: dirRead,
      ownFiles: ownFiles
    };
});
