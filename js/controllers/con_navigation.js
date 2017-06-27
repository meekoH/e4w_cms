// Setting up the Navigation controller.
e4wApp.controller('sideNavCtrl', function($scope, $rootScope, $location, $http) {
    $scope.location = $location.path();
    $rootScope.$on('$routeChangeSuccess', function() {
        $scope.location = $location.path();
    });
    
	// Run the getNavItems function to initialize the navigation.
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

    $scope.closeMobileNav = function() {
        $('header, .side-nav, .res-nav-close-btn-container').removeClass('nav-opened');
    }
});