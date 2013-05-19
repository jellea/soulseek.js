'use strict';

angular.module('p2pmusicApp')
  .factory('PlayerService', function () {
    if('webkitAudioContext' in window) {
      var myAudioContext = new webkitAudioContext();
    }

    var bufferSound = function (event) {
      var request = event.target;
      var source = myAudioContext.createBufferSource();
      source.buffer = myAudioContext.createBuffer(request.response, false);
      source.connect(myAudioContext.destination);
      source.noteOn(0);
    }

    // Public API here
    return {
      context: myAudioContext,
      bufferSound: bufferSound
    };
  });
