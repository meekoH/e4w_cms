// Setting up the Navigation controller.
e4wApp.controller('sideNavCtrl', function($scope, $location, $http) {
	// Run the getProducts function in order to display a list of all available products.
    getNavItems();

    // getProducts initializes the data and displays the contents to the user.
    function getNavItems() {
        // Go fetch the data from get_nav.php.
        $http.post('./components/get_nav.php')
        .success(function(data) {
            $scope.navItems = data;
        });
    }

	$scope.setActiveMenu = function(chosenPage) {
		var currentPage = $location.path().substring(1);
		return chosenPage === currentPage ? "active" : "";
	};
});