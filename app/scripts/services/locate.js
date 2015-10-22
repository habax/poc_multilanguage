'use strict';

/**
 * @ngdoc service to obtain a lenguage on locate folder
 * @name multilangApp.locate
 * @description
 * # locate
 * Factory in the multilangApp.
 */
angular.module('multilangApp')
  .factory('locate', function ($http, $q) {

      return function (options) {
        var deferred = $q.defer();

        $http({
          method:'GET',
          url:'locate/' + options.key + '.json'
        }).success(function (data) {
          deferred.resolve(data);
        }).error(function (e) {
          deferred.reject(options.key);
        });

        return deferred.promise;
      }

  });
