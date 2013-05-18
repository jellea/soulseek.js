'use strict';

angular.module('p2pmusicApp')
  .controller('ChatCtrl', function ($scope, $rootScope) {
    $scope.msgs = [
      {user: 'chat', msg: 'welcome'}
    ];

    $rootScope.$on('rtc-onmessage', function(event, data)
    {
      console.log(data);
      $scope.msgs.push(data);
      $scope.$digest();
    });

    $rootScope.$on('rtc-onleave', function(event, data)
    {
      console.log('event');
      $scope.msgs.push({user: 'chat', msg: 'user '+ data +' left.'});
      $scope.$digest();
    });
  });
