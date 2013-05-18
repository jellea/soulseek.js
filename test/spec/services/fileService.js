'use strict';

describe('Service: fileService', function () {

  // load the service's module
  beforeEach(module('p2pmusicApp'));

  // instantiate service
  var fileService;
  beforeEach(inject(function (_fileService_) {
    fileService = _fileService_;
  }));

  it('should do something', function () {
    expect(!!fileService).toBe(true);
  });

});
