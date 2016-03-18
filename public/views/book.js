'use strict';

angular.module('myApp.book', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/books/:id', {
    templateUrl: 'views/book.html',
    controller: 'BookCtrl'
  });
}])

.controller('BookCtrl', ['$scope', '$routeParams', 'Book',
  function($scope, $routeParams, Book) {
    $scope.book = Book.get({id: $routeParams.id}, function(book) {
    });
}])

.factory('Book', ['$resource',
  function($resource){
    return $resource('/api/books/:id', null, function(){

    });
}]);
