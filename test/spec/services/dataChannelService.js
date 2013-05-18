'use strict';

describe('Service: dataChannelService', function () {

  // load the service's module
  beforeEach(module('p2pmusicApp'));

  // instantiate service
  var dataChannelService;
  beforeEach(inject(function (_dataChannelService_) {
    dataChannelService = _dataChannelService_;
  }));

  it('should do something', function () {
    expect(!!dataChannelService).toBe(true);
  });

});
