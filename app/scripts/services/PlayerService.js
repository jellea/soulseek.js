'use strict';

angular.module('p2pmusicApp')
  .factory('playerService', function () {
    if('webkitAudioContext' in window) {
      var myAudioContext = new webkitAudioContext();
    }

    var bufferSound = function (event) {
      console.log(event)
      var source = myAudioContext.createBufferSource();
      var buffer = myAudioContext.decodeAudioData(event.data,
        function(buffer){
          source.buffer = myAudioContext.createBuffer(buffer, false);
          source.connect(myAudioContext.destination);
          source.noteOn(0);
        });
    }

    // Public API here
    return {
      context: myAudioContext,
      bufferSound: bufferSound
    };
  });
