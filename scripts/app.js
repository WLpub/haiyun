(function(){
	'use strict';

	angular
		.module('haiyun',['ngRoute'])
		.config(config);

	function config($routeProvider){
		$routeProvider
			.when('/signIn', {
				templateUrl: 'views/signIn.html',
				controller: 'signInCtrl'
			})
			.otherwise({ redirectTo: '/' });
	}
})();
