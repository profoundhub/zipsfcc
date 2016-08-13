'use strict';

angular.module('fccziplines')
  .controller('UpdatedbCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $http.get('/api/updatedb').then(function(data){console.log(data)})
  });
