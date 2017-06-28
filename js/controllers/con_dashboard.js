// Setting up the Dashboard controller.
e4wApp.controller('dashboardCtrl', function($scope) {
	// When the content is loaded, run the scrollInit() function to adjust the height of the content.
	$scope.$on('$viewContentLoaded', function () {
    	scrollInit();
    });
    $scope.info = 'Dashboard';
});