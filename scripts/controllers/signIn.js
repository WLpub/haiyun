(function(){
	'use strict';

	angular
		.module('haiyun')
		.controller('signInCtrl', signInCtrl);

	function signInCtrl($scope,$http){
		$scope.formData={username:"yourname",
						 password:"password"};
		$scope.processForm = function() {
			console.log($scope.formData);
		    $http({
		        method  : 'GET',
		        url     : '***',
		        data    : $.param($scope.formData),  // pass in data as strings
		        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
		    })
		        .success(function(data) {
		            console.log(data);
		 
		            if (!data.success) {
		                // if not successful, bind errors to error variables
		                $scope.errorName = data.errors.name;
		                $scope.errorSuperhero = data.errors.superheroAlias;
		            } else {
		                // if successful, bind success message to message
		                $scope.message = data.message;
		            }
		        });
		};
	}
})();