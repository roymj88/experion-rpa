'use strict';

angular.module('inspinia')
	.factory('loginService', function($http, LOGIN_URL, $log, $q) {

		var login = function(data) {
     		
     		var deferred = $q.defer();

     		var req = {
			 	method: 'POST',
				url: LOGIN_URL+ 'login',
				data: data
			};

			$http(req).then(function(data){
				deferred.resolve(data);
			}, function(msg, code){
				deferred.reject(msg);
				$log.error(msg, code);
			});

     		return deferred.promise;

  		};

	return {
  		login: login
	}
	
});
