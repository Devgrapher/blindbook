'use strict';

angular.module('myApp.lend', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lend', {
    templateUrl: 'views/home/lend.html',
    controller: 'lendCtrl'
  });
}])

.controller('lendCtrl', ['$scope', '$location', 'Book',
  function($scope, $location, Book) {
    $scope.books = Book.query();
    $scope.tags = [];
    $scope.save = function() {
      if(!$scope.name || $scope.name.length < 1) return;
      var book = new Book({
        name: $scope.name,
        owner: $scope.owner,
        tags: $scope.tags
      });
      book.$save(function(){
        $location.url('/');
      });
  };
  $scope.add_tag = function() {
    $scope.tags.push($scope.newTag);
    $scope.newTag = '';
  };
}]);
