// Let's define our AngularJS application.
var e4wApp = angular.module("e4wApp", ['ngRoute']);

e4wApp.config(function($routeProvider){
	$routeProvider
		.when('/dashboard', {
            templateUrl : './components/views/partials/dashboard/dashboard.html',
            controller  : 'dashboardCtrl'
        });
});

// Set up the Footer copyright date.
var date = new Date();
var year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;