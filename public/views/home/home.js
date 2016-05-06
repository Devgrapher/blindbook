'use strict';

angular.module('myApp.home', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'views/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope', 'Book', function($scope, Book) {
  $scope.books = Book.query();
  $scope.bookUrl = "image/book.jpg";
  $scope.filter = "available"
}]);
