'use strict';

angular.module('p2pmusicApp')
  .controller('LoginCtrl', function ($scope, $rootScope, RTCService, fileService) {

    $scope.initialized = false;
    $scope.showFiles = false;

    var nms = ["De Jong", "Jansen", "De Vries", "Van den Berg",
    "Van Dijk", "Bakker", "Visser", "Smit", "Meijer", "De Boer", "Mulder",
    "De Groot", "Bos", "Vos", "Peters", "Hendriks", "Van Leeuwen", "Dekker",
    "Brouwer", "De Wit", "Dijkstra", "Smits", "De Graaf", "Van der Meer"]

    $scope.username = nms[Math.floor(Math.random() * nms.length)];

    // $scope.username = $cookieStore.get('username');

    // if($scope.username.length > 0)
    // {
    //   $scope.setUsername();
    // }

    $scope.setUsername = function() {

      RTCService.setupDataChannel($scope.username);
      // $cookieStore.put('username', $scope.username);

      $scope.showFiles = true;
      $scope.username = '';
    };

    $rootScope.$on('file-Drop', function(element) {
      fileService.dirRead(element, $scope.filesComplete);

      mainChannel.connect('2');
      $scope.initialized = true;
      $scope.$digest();
    });

    $scope.filesComplete = function() {
    };

  });
