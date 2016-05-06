'use strict';

angular.module('myApp.lend', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('lend', {
    url: "/lend",
    templateUrl: 'views/home/lend.html',
    controller: 'lendCtrl'
  });
}])

.controller('lendCtrl', ['$scope', '$location', 'Book', 'Member',
  function($scope, $location, Book, Member) {
    $scope.tags = [];
    $scope.save = function() {
      if(!$scope.name || $scope.name.length < 1) return;
      if(!$scope.tags || $scope.tags.length < 1) return;
      if(!$scope.owner || $scope.owner.length < 1) return;
      if(!$scope.phone || $scope.phone.length < 1) return;

      // update memeber info
      Member.query({ phone: $scope.phone }, function (members) {
        var member;
        if (members.length > 0) {
          member = members[0];
          member.name = $scope.owner;
          member.phone = $scope.phone;
          Member.update({id:member._id}, member);
          $scope.new_book(member);
        }
        else {
          member = new Member({
            name: $scope.owner,
            phone: $scope.phone
          });
          member.$save(function(member) {
            $scope.new_book(member);
          });
        }
      });
    $scope.new_book = function(owner) {
      var book = new Book({
        name: $scope.name,
        owner: owner._id,
        tags: $scope.tags
      });
      book.$save(function(){
        $location.url('/');
      });
    }
  };
  $scope.add_tag = function() {
    $scope.tags.push($scope.newTag);
    $scope.newTag = '';
  };
}]);
