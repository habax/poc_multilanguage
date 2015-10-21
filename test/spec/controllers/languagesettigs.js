'use strict';

describe('Controller: LanguagesettigsCtrl', function () {

  // load the controller's module
  beforeEach(module('multilangApp'));

  var LanguagesettigsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LanguagesettigsCtrl = $controller('LanguagesettigsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
