'use strict';

angular.module('fccziplines')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pen', {
        templateUrl: 'pen/pen.html',
        controller: 'PenCtrl'
      });
  });
