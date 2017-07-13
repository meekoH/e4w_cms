// Define the AngularJS application.
// ngRoute used for the routing of the application.
// ngAnimate used to animate view changes.
// e4wApp is the module for the CMS itself.
var e4wApp = angular.module("e4wApp", ['ngRoute', 'ngAnimate']);

// Set up the Footer copyright date.
var date = new Date();
var year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;