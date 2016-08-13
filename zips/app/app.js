'use strict';

angular.module('fccziplines', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'angularUtils.directives.dirPagination'
])

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '#/'
      });

    $locationProvider.html5Mode(true);
  });
