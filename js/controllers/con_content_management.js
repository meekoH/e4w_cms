// Setting up the Content Management controller.
e4wApp.controller('contentManageCtrl', function($scope) {
	$scope.$on('$viewContentLoaded', function () {
    	scrollInit();
    });
    $scope.info = 'Content Management';
});