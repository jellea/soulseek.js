'use strict';

angular.module('p2pmusicApp')
  .controller('FileBrowserCtrl', function ($scope, $rootScope) {

    $scope.show = false;
    $scope.userid = '';

    $scope.download = function() {

      mainChannel.channels[$scope.userid].send({requestFile: this.file});

    };

    $scope.stream = function() {

      console.log(this.file);

    };

    $scope.showLevel = function(item, level) {

      if (typeof level === 'number') {

        return item.split('/')[level];

      } else if (typeof level === 'string') {

        var split = item.split('/');
        for (var i in split) {
          if(split[i] === level) {
            return split[i+1];
          }
        }

      }

    };

    $scope.$on('closeWindows', function() {

      console.log('closeMe');
      $scope.show = false;
      //$scope.$digest();

    });

    $rootScope.$on('rtc-gotFileList', function(event, data) {

      $scope.show = true;
      $scope.userid = data.userid;
      $scope.files = data.files; //.map(function(i){$scope.showLevel(i,1)});
      $scope.$digest();

    });

  });
