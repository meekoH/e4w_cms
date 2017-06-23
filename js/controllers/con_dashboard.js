// Setting up the Dashboard controller.
e4wApp.controller('dashboardCtrl', function($scope) {
	$scope.$on('$viewContentLoaded', function () {
    	scrollInit();
    });
    $scope.info = 'Dashboard';
});