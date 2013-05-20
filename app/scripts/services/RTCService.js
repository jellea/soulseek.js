'use strict';

angular.module('p2pmusicApp')
  .factory('RTCService', function ($rootScope, fileService, playerService) {

    window.mainChannel = {}

    var setupDataChannel = function(userid) {
      window.mainChannel = new DataChannel('slsk-channel',{
        direction: 'many-to-many',
        autoCloseEntireSession: false,
        transmitRoomOnce: false,
        userid: userid,
        onopen: function (userid)
        {
          // get user filelist
          $rootScope.$broadcast('rtc-onopen', userid);
          //mainChannel.send({filelistRequest: true});
        },
        onleave: function (userid)
        {
          //console.log(userid);
          $rootScope.$broadcast('rtc-onleave', userid);
        },
        onmessage: function (message, userid)
        {
          // if filelist request
          if (typeof message == 'object')
          {
            console.log(message);
            if (typeof message.filelistRequest !== 'undefined'){
              // send filelist if requested
              //console.log('filelistRequest!');
              //console.log(fileService.ownFiles);
              mainChannel.channels[userid].send(
                {filelist:
                  fileService.ownFiles.map(function(x){return x.fullPath;})
                }
              );
            }
            if (typeof message.filelist !== 'undefined'){
              mainChannel.channels[userid].filelist = message.filelist;
              $rootScope.$broadcast('rtc-gotFileList',
                                    {files:message.filelist, userid: userid});
            }
            if (typeof message.requestFile !== 'undefined'){

              // if folder
              // if single file
              var file = ownFiles.filter(
                function(x){return (x.fullPath==message.requestFile)}
              );

              file[0].file(function(file){mainChannel.channels[userid].send(file)});
            }
            if (typeof message.requestStream !== 'undefined'){

              // if folder
              // if single file
              var file = ownFiles.filter(
                function(x){return (x.fullPath==message.requestFile)}
              );

              file[0].file(
                function(file)
                {
                  new window.FileReader();
                  reader.readAsArrayBuffer(result);
                  reader.onload = function(e)
                  {
                    mainChannel.channels[userid].send(reader.result);
                  }
                  ;
                });
            }

          }
          else if(typeof message == 'string')
          {
            $rootScope.$broadcast('rtc-onmessage', {msg: message, user: userid});
          }
        },
        onFileProgress: function (packets)
        {
          //console.log(packets);
          $rootScope.$broadcast('rtc-onFileProgress', packets);

          // packets.fileName
          // packets.remaining
          // packets.sent
          // packets.received
          // packets.length
        },
        onStreamProgress: function (packets)
        {
          console.log(packets);
          playerService.bufferSound(packets);
          //$rootScope.$broadcast('rtc-onFileProgress', packets);
        },
        onFileSent: function (file)
        {
          //console.log(file);
          $rootScope.$broadcast('rtc-onFileSent', file);

          // file.name
          // file.size
        },
        onFileReceived: function (fileName)
        {
          console.log(fileName);
          $rootScope.$broadcast('rtc-onFileReceived', fileName);
        }
      });
    };

    // Public API here
    return {
      mainChannel: mainChannel,
      setupDataChannel: setupDataChannel
    }
  });
