'use strict';

angular.module('p2pmusicApp')
  .controller('LoginCtrl', function ($scope, $rootScope, RTCService, fileService) {

    $scope.initialized = false;
    $scope.usernameSet = false;
    $scope.filesDropped = false;

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

      $scope.usernameSet = true;
      $scope.username = '';
      $scope.checkInit();
    };

    $rootScope.$on('file-Drop', function(element) {
      console.log('drop');
      fileService.dirRead(element, $scope.filesComplete);

      $scope.filesDropped = true;
      $scope.checkInit();

      $scope.$digest();
    });

    $scope.filesComplete = function() {
    };

    $scope.checkInit = function() {
      if($scope.filesDropped && $scope.usernameSet){
        $scope.initialized = true;
      }
    }

  });
