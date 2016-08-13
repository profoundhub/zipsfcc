'use strict';

angular.module('fccziplines')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/updatedb', {
        templateUrl: 'updatedb/updatedb.html',
        controller: 'UpdatedbCtrl'
      });
  });
