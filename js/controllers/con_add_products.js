// addProdCtrl used for the Add Products view controls.
e4wApp.controller('addProdCtrl', function($scope) {
	// When the content is loaded, run the scrollInit() function to adjust the height of the content.
	$scope.$on('$viewContentLoaded', function () {
    	scrollInit();
    });
    $scope.info = 'Add Products';
});