angular.module('rosettaW.control', [])
.controller('AppCntrl', function ($scope, $http, Zipcode) {
	//do some controlling
  $scope.weatherData = {};


	$scope.getWeather = function () {

		Zipcode.weather($scope.zip).then(function (data) {

			//format our data into something that we can work with
			var formattedData = Zipcode.format(data);
			
			$scope.weatherData = formattedData;
			$scope.currentWeather = Zipcode.stringify(formattedData);

		});

		//reset the value of our input field
		$scope.zip = '';



	} 
})