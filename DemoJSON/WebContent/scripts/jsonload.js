var myApp = angular.module('myApp', []);

myApp.controller('jsonCtrl', function($scope, $http){
	$http.get('users.json').success(function (data){
		$scope.users = data;
	});
	
	$scope.getTotalUsers = function(){
		return $scope.users.length;
	}
	
	$scope.addUser = function(){
		$scope.users.push({name:$scope.name, email:$scope.email, mobile:$scope.mobile, designation:$scope.designation});
	}
});