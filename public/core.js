var app = angular.module('flytta',[]);

function maincontroller($scope,$http,$window)
{
    console.log('sdc');
    $scope.postflytta = function()
	{
	   $http.get('api/flytta')
	   
	        .success(function(data)
			{
			   console.log("sd");
			   var url = "http://" + $window.location.host + "/public/success";
       
               $window.location.href = url;
			})
			
			.error(function(data) {
            console.log('Error: ' + data);
            })
	};
	
}
		  