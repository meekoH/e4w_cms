// Setting up the Edit Products controller.
e4wApp.controller('editProdCtrl', function($scope) {
	// When the content is loaded, run the scrollInit() function to adjust the height of the content.
	$scope.$on('$viewContentLoaded', function () {
    	scrollInit();
    });
    $scope.info = 'Edit Products';
});