// Setting up the Add Products controller.
e4wApp.controller('addProdCtrl', function($scope) {
	$scope.$on('$viewContentLoaded', function () {
    	scrollInit();
    });
    $scope.info = 'Add Products';
});