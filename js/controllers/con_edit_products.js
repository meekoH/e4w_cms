// Setting up the Edit Products controller.
e4wApp.controller('editProdCtrl', function($scope) {
	$scope.$on('$viewContentLoaded', function () {
    	scrollInit();
    });
    $scope.info = 'Edit Products';
});