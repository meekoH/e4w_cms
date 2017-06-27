// Define the AngularJS application and add the ngRoute dependency.
// e4wApp is the module for the CMS itself.
var e4wApp = angular.module("e4wApp", ['ngRoute', 'ngAnimate']);

// ngRoute module is used to configure (config) the routing for this SPA.
// $routeProvider provides the view based on the url.
e4wApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
        templateUrl : './components/views/login/user_login.html',
        controller  : 'e4wLoginCtrl'
    })
	.when('/dashboard', {
        templateUrl : './components/views/dashboard/dashboard.html',
        controller  : 'dashboardCtrl'
    })
    .when('/add-products', {
        templateUrl : './components/views/add-products/add-products.html',
        controller  : 'addProdCtrl'
    })
    .when('/edit-products', {
        templateUrl : './components/views/edit-products/edit-products.html',
        controller  : 'editProdCtrl'
    })
    .when('/content-management', {
        templateUrl : './components/views/content-management/content-management.html',
        controller  : 'contentManageCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
})
.run(function($rootScope, $location, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
        if ($location.path() == '/') {
            $rootScope.loggedInContent = false;
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