'use strict';

angular.module('myApp.borrow', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('borrow', {
    url: '/borrow/:id',
    templateUrl: 'views/borrow.html',
    controller: 'borrowCtrl'
  });
}])

.controller('borrowCtrl', ['$scope', '$stateParams', '$state', '$window', 'Member', 'Book', function($scope, $stateParams, $state, $window, Member, Book) {
  $scope.book = Book.get({id: $stateParams.id});

  $scope.save = function() {
    if(!$scope.phone || $scope.phone.length < 1) return;
    if(!$scope.borrower || $scope.borrower.length < 1) return;
    if(!$scope.dt_pick || $scope.dt_pick.length < 1) return;

    // update memeber info
    Member.query({ phone: $scope.phone }).$promise.then(function(members) {
      var member;
      if (members.length > 0) {
        member = members[0];
        member.name = $scope.borrower;
        member.phone = $scope.phone;
        Member.update({id:member._id}, member).$promise.then(function() {
        }, function(err){
          $window.alert(err)
        })
        $scope.borrow_book(member);
      }
      else {
        member = new Member({
          name: $scope.borrower,
          phone: $scope.phone
        });
        member.$save(function(member) {
          $scope.borrow_book(member);
        });
      }
    }, function(err) {
      $window.alert("Member Query Error : " + err);
    });
  }

  $scope.borrow_book = function(borrower) {
    if ($scope.book.return_date) return;

    $scope.book.return_date = $scope.dt_pick;
    $scope.book.borrower = borrower.name;
    Book.update({id:$scope.book._id}, $scope.book).$promise.then(function(){
      $state.go('home', {}, {reload: true});
    }, function(err){
      $window.alert("Borrow Fail! : " + err)
      $state.go('home', {}, {reload: true});
    });
  }

  $scope.today = function() {
    $scope.dt_pick = new Date();
	$scope.dt_pick.setDate($scope.dt_pick.getDate() + 21);
  };

  $scope.today();

  $scope.clear = function() {
    $scope.dt_pick = null;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    maxDate: new Date(2020, 1, 1),
    minDate: new Date(),
    startingDay: 1
  };

  $scope.open_dt = function() {
    $scope.popup.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt_pick = new Date(year, month, day);
  };

  $scope.format = 'yyyy/MM/dd';

  $scope.popup = {
    opened: false
  };
}]);
