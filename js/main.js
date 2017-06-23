// Let's define our AngularJS application.
var e4wApp = angular.module("e4wApp", ['ngRoute']);

e4wApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
        templateUrl : './components/views/partials/dashboard/dashboard.html',
        controller  : 'dashboardCtrl'
    })
	.when('/dashboard', {
        templateUrl : './components/views/partials/dashboard/dashboard.html',
        controller  : 'dashboardCtrl'
    });
});

// 
$('#resNavOpen').click(function() {
    $('.side-nav').addClass('nav-opened');
    $('.res-nav-close-btn-container').addClass('nav-opened');
});
$('#resNavClose').click(function() {
    $('.side-nav').removeClass('nav-opened');
    $('.res-nav-close-btn-container').removeClass('nav-opened');
});

// Set up the Footer copyright date.
var date = new Date();
var year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;