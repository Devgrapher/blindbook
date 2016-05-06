'use strict';

angular.module('myApp.book', ['ui.router', 'ngResource'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('books', {
    url: '/books/:id',
    templateUrl: 'views/book.html',
    controller: 'BookCtrl'
  });
}])

.controller('BookCtrl', ['$scope', '$stateParams', '$state', 'Book', 'Comment',
  function($scope, $stateParams, $state, Book, Comment) {
    $scope.book = Book.get({id: $stateParams.id}, function(book) {
      $scope.comments = Comment.query({discussion_id: $scope.book._id});
    });
    $scope.save = function() {
      var comment = new Comment();
      comment.discussion_id = $scope.book._id;
      comment.name = $scope.comment_name;
      comment.text = $scope.comment_text;

      comment.$save(function() {
        $state.reload();
      });
    }
}])

.factory('Book', ['$resource',
  function($resource){
    return $resource('/api/books/:id', null, function(){

    });
}]);
