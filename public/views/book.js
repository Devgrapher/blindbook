'use strict';

angular.module('myApp.book', ['ui.router', 'ngResource'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('books', {
    url: '/books/:id',
    templateUrl: 'views/book.html',
    controller: 'BookCtrl'
  });
}])

.controller('BookCtrl', ['$scope', '$stateParams', 'Book',
  function($scope,$stateParams, Book) {
    $scope.book = Book.get({id: $stateParams.id}, function(book) {
    });
}])

.factory('Book', ['$resource',
  function($resource){
    return $resource('/api/books/:id', null, function(){

    });
}]);
