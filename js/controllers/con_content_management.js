// Setting up the Content Management controller.
e4wApp.controller('contentManageCtrl', function($scope) {
	// When the content is loaded, run the scrollInit() function to adjust the height of the content.
	$scope.$on('$viewContentLoaded', function () {
    	scrollInit();
    });
    $scope.info = 'Content Management';
});