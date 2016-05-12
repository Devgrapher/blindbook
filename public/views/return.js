'use strict';

angular.module('myApp.return', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('return', {
    url: '/return/:id',
    templateUrl: 'views/return.html',
    controller: 'returnCtrl'
  });
}])

.controller('returnCtrl', ['$scope', '$stateParams', '$state', 'Book', function($scope, $stateParams, $state, Book) {
  $scope.book = Book.get({id: $stateParams.id});
  $scope.passwd = '';
  $scope.save = function() {
  	if (!$scope.book.return_date) return;

  	$scope.book.return_date = '';
  	$scope.book.borrower = '';
  	Book.update({id:$scope.book._id}, $scope.book, function(){
	  $state.go('home', {}, {reload: true});
  	});
  }
}]);