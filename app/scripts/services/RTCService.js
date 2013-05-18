'use strict';

angular.module('p2pmusicApp')
  .factory('RTCService', function ($rootScope, fileService) {

    window.mainChannel = new DataChannel();

    var URL = "http://localhost:9002/"

    mainChannel.openSignalingChannel = function (config) {
        var _channel = config.channel || this.channel || 'default-channel';
        var sender = Math.round(Math.random() * 60535) + 5000;

        io.connect(URL).emit('new-channel', {
            channel: _channel,
            sender : sender
        });

        var socket = io.connect(URL + _channel);
        socket.channel = _channel;
        socket.on('connect', function () {
            if (config.callback) config.callback(socket);
        });

        socket.send = function (message) {
            socket.emit('message', {
                sender: sender,
                data  : message
            });
        };

        socket.on('message', config.onmessage);
    };

    mainChannel.direction = 'many-to-many';

    var p2pChannels = [];

    var nms = ["De Jong", "Jansen", "De Vries", "Van den Berg",
      "Van Dijk", "Bakker", "Visser", "Smit", "Meijer", "De Boer", "Mulder",
      "De Groot", "Bos", "Vos", "Peters", "Hendriks", "Van Leeuwen", "Dekker",
      "Brouwer", "De Wit", "Dijkstra", "Smits", "De Graaf", "Van der Meer"]

    mainChannel.userid = nms[Math.floor(Math.random() * nms.length)];

    mainChannel.onopen = function (userid)
    {
      // get user filelist
      $rootScope.$broadcast('rtc-onopen', userid);
      mainChannel.send('hi!');
      mainChannel.send({filelistRequest: true});
    }

    mainChannel.onleave = function (userid)
    {
      console.log(userid);
      $rootScope.$broadcast('rtc-onleave', userid);
    }

    // all incoming messages
    mainChannel.onmessage = function (message, userid)
    {
      // if filelist request
      if (typeof message == 'object')
      {
        console.log(message);
        if (typeof message.filelistRequest !== 'undefined'){
          // send filelist if requested
          console.log('filelistRequest!');
          console.log(fileService.ownFiles);
          mainChannel.channels[userid].send(
            {filelist:
              fileService.ownFiles.map(function(x){return x.fullPath;})
            }
          );
        }
        if (typeof message.filelist !== 'undefined'){
          mainChannel.channels[userid].filelist = message.filelist;
        }
        if (typeof message.requestFile !== 'undefined'){

          // if folder
          // if single file
          var file = ownFiles.filter(
            function(x){return (x.fullPath==message.requestFile)}
          );

          console.log(file)
          file[0].file(function(file){mainChannel.channels[userid].send(file)});
        }

      }
      else if(typeof message == 'string')
      {
        $rootScope.$broadcast('rtc-onmessage', {msg: message, user: userid});
      }
    }

    mainChannel.onFileProgress = function (packets)
    {
      console.log(packets);
      $rootScope.$broadcast('rtc-onFileProgress', packets);

      // packets.remaining
      // packets.sent
      // packets.received
      // packets.length
    };

    // on file successfully sent
    mainChannel.onFileSent = function (file)
    {
      console.log(file);
      $rootScope.$broadcast('rtc-onFileSent', file);

      // file.name
      // file.size
    };

    mainChannel.onFileReceived = function (fileName)
    {
      console.log(fileName);
      $rootScope.$broadcast('rtc-onFileReceived', fileName);
    };

    // Public API here
    return {
      mainChannel: mainChannel,
      openConnection: function(){
        mainChannel.connect('2');
      }
    }
  });
