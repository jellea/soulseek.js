'use strict';

angular.module('p2pmusicApp')
  .controller('MainCtrl', function ($scope, RTCService) {
    mainChannel.connect('2');
  });
