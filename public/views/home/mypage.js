'use strict';

angular.module('myApp.mypage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mypage', {
    templateUrl: 'views/home/mypage.html',
    controller: 'MypageCtrl'
  });
}])

.controller('MypageCtrl', [function() {

}]);
