'use strict';

angular.module('p2pmusicApp')
  .directive('fileDrop', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element) {
        jQuery.event.props.push('dataTransfer');

        element.dropEffect = 'copy';

        element.bind('dragover dragleave', function (e) {
          e.stopPropagation();
          e.preventDefault();
        });

        element.bind('dragenter', function() {
          element.addClass('dragenter');
        });

        element.bind('dragleave', function() {
          element.removeClass('dragenter');
        });

        element.bind('drop', function(e) {
          e.stopPropagation();
          e.preventDefault();

          console.log(e);

          e.dataTransfer.dropEffect = 'copy';
          var files = e.dataTransfer.files;

          angular.element(element).scope().setFiles(files);
        });
      }
    };
  });
