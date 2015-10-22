'use strict';

/**
 * @ngdoc overview
 * @name multilangApp
 * @description
 * # multilangApp
 *
 * Main module of the application.
 */
angular
  .module('multilangApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($translateProvider) {
      $translateProvider.useLoader('locate', {});
      $translateProvider.use('en');
      // http://ascii.cl/es/codigos-html.htm
  });
