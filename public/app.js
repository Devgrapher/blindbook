'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ui.bootstrap',
  'myApp.home',
  'myApp.search',
  'myApp.mypage',
  'myApp.version',
  'myApp.lend',
  'myApp.book',
  'myApp.member',
  'myApp.comment',
  'myApp.borrow',
  'myApp.return'
])
.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) { 
		$stateProvider
  $urlRouterProvider.otherwise('/home');
}]);
