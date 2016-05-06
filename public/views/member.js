'use strict';

angular.module('myApp.member', ['ngResource'])

.factory('Member', ['$resource',
  function($resource){
    return $resource('/api/members/:id', null, {
	    'update': { method:'PUT' },
    });
}]);