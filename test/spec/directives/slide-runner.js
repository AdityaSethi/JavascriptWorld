'use strict';

describe('Directive: slideRunner', function () {

  // load the directive's module
  beforeEach(module('trainingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<slide-runner></slide-runner>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the slideRunner directive');
  }));
});
