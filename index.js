var myApp = angular.module('myApp', ['ngMap']);

myApp.controller("TopSpots", [
	'$scope', 
	'$http', 
	'NgMap', 
	function($scope, $http, NgMap) {

	var activate = function() {
		$http.get('topSpots.json')
				/*method: 'GET',
				url: 'topSpots.json'
			})*/
			.then(function(response) {
				$scope.topSpots = response.data;
			});
	};

	$scope.addNewLocation = function (newTopSpot) {
		if (isNaN(Number(newTopSpot.latitude))) {
			alert("\"" + newTopSpot.longitude + "\"" + " is not a valid coordinate");
			return;
		}

		if(isNaN(Number(newTopSpot.longitude))) {
			alert("\"" + newTopSpot.longitude + "\"" + " is not a valid coordinate");
			return;
		}

		newTopSpot.location = [Number(newTopSpot.latitude), Number(newTopSpot.longitude)];
		$scope.topSpots.push(newTopSpot);
		$scope.newTopSpot = {};
	};

	activate();
}]);