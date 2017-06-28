// Setting up the Navigation controller.
e4wApp.controller('sideNavCtrl', function($scope, $rootScope, $location, $http) {
    // When the content is loaded, run the scrollInit() function to adjust the height of the content.
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
            // Store the retrived data in the scope of navItems.
            $scope.navItems = data;
        });
    }

    // setActiveMenu used for setting the selected state of the Side Bar Navigation items.
	$scope.setActiveMenu = function(chosenPage) {
		var currentPage = $location.path().substring(1);
		return chosenPage === currentPage ? "selected" : "";
	};

    // closeMobileNav used for removing the nav-opened class from any mobile set styles.
    $scope.closeMobileNav = function() {
        $('header, .side-nav, .res-nav-close-btn-container').removeClass('nav-opened');
    }
});