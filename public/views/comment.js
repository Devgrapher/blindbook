'use strict';

angular.module('myApp.comment', ['ngResource'])

.factory('Comment', ['$resource',
  function($resource){
    return $resource('/api/comments/:id', null, {
	    'update': { method:'PUT' },
    });
}]);