'use strict';

angular.module('p2pmusicApp')
  .controller('ChatCtrl', function ($scope, $rootScope) {
    $scope.msgs = [
      {user: 'chat', msg: 'Welcome!'}
    ];

    $scope.sendMessage = function(){
      mainChannel.send($scope.message);
      $scope.msgs.push({user: 'You', msg: $scope.message});
      $scope.message = '';
    };

    $rootScope.$on('rtc-onmessage', function(event, data)
    {
      console.log(data);
      $scope.msgs.push(data);
      $scope.$digest();
    });

    $rootScope.$on('rtc-onopen', function(event, data)
    {
      $scope.msgs.push({user: 'chat', msg: 'user '+ data +' joined.'});
      $scope.$digest();
    });

    $rootScope.$on('rtc-onleave', function(event, data)
    {
      $scope.msgs.push({user: 'chat', msg: 'user '+ data +' left.'});
      $scope.$digest();
    });
  });
