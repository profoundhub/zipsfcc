'use strict';

angular.module('ziplineFcc2App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pen', {
        templateUrl: 'pen/pen.html',
        controller: 'PenCtrl'
      });
  });
