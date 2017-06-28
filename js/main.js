// Define the AngularJS application.
// ngRoute used for the routing of the application.
// ngAnimate used to animate view changes.
// e4wApp is the module for the CMS itself.
var e4wApp = angular.module("e4wApp", ['ngRoute', 'ngAnimate']);

e4wApp
// e4wApp.config switches the view based on the path.
.config(function($routeProvider) {
	$routeProvider
    // Initially, start the user on the Login page.
	.when('/', {
        templateUrl : './components/views/login/user_login.html',
        controller  : 'e4wLoginCtrl'
    })
    // Switch to the Dashboard page and utilize the Dashboard Controller.
	.when('/dashboard', {
        templateUrl : './components/views/dashboard/dashboard.html',
        controller  : 'dashboardCtrl'
    })
    // Switch to the Add Products page and utilize the Add Products Controller.
    .when('/add-products', {
        templateUrl : './components/views/add-products/add-products.html',
        controller  : 'addProdCtrl'
    })
    // Switch to the Edit Products page and utilize the Edit Products Controller.
    .when('/edit-products', {
        templateUrl : './components/views/edit-products/edit-products.html',
        controller  : 'editProdCtrl'
    })
    // Switch to the Content Management page and utilize the Content Manage Controller.
    .when('/content-management', {
        templateUrl : './components/views/content-management/content-management.html',
        controller  : 'contentManageCtrl'
    })
    // If the path doesn't exist, re-direct to the Login page.
    .otherwise({
        redirectTo: '/'
    });
})
.run(function($rootScope, $location) {
    // This checks that a route change has successfully occured.
    $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
        // If the routes path is '/' (the login page), then hide some content based on loggedInContent.
        if ($location.path() == '/') {
            $rootScope.loggedInContent = false;
            // If the Mobile - Side Navigation was open and you logged out, the Close Mobile Navigation button was still visible.
            $('.res-nav-close-btn-container').removeClass('nav-opened');
        // Otherwise, display the content based on loggedInContent.
        } else {
            $rootScope.loggedInContent = true;
        }
    })
});

// Adding the nav-opened class to the Header, Side Navigation and Close Responsive Navigation button.
$('#resNavOpen').click(function() {
    $('header, .side-nav, .res-nav-close-btn-container').addClass('nav-opened');
});

// Removing the nav-opened class to the Header, Side Navigation and Close Responsive Navigation button.
$('#resNavClose').click(function() {
    $('header, .side-nav, .res-nav-close-btn-container').removeClass('nav-opened');
});

// Set up the Footer copyright date.
var date = new Date();
var year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;