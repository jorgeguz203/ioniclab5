angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {


}])
   
.controller('page2Ctrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
	city = $stateParams.city;
    url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ccc1ef3965b0f1db1409eaecc3619702" ;
    	console.log(url);


    	$http.get(url).then(function(response){
        $scope.city = response.data.name;
	    $scope.temp = response.data.main.temp;
	    $scope.icon = response.data.weather[0].icon;	

        }, function(error){
            alert("Unable to retrieve UV info");
        });

}])
 