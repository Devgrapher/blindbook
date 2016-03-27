'use strict';

angular.module('myApp.search', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('search', {
    url: '/search',
    templateUrl: 'views/home/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope','Book', function($scope, Book) {
  $scope.books = Book.query();
}]);
