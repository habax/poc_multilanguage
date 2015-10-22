'use strict';

/**
 * @ngdoc function
 * @name multilangApp.controller:LanguagesettigsCtrl
 * @description
 * # LanguagesettigsCtrl
 * Controller of the multilangApp
 */
angular.module('multilangApp')
  .controller('LanguagesettigsCtrl', function ($scope,$translate) {

    $scope.changeLanguage = function (key) {
		    $translate.use(key);
	};

  });
