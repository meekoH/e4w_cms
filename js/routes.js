// e4wApp.config switches the view based on the path.
e4wApp
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
    });