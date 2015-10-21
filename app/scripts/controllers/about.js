'use strict';

/**
 * @ngdoc function
 * @name multilangApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the multilangApp
 */
angular.module('multilangApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
