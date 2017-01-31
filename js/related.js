'use strict';
app.controller('relatedController', function($scope, $http) {

	$http.get("videodata.json").then(function (response) {$scope.videos = response.data.videos;});
	$scope.removeItem = function (x) {$scope.videos.splice(x, 1);};
	
});
