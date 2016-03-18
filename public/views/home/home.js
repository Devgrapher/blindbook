'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope','Book', function($scope, Book) {
  $scope.books = Book.query();
  $scope.bookUrl = "image/book_default2.jpg";
}]);
