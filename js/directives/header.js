// e4wHeader directive used for instantiating the site header.
e4wApp.directive('e4wHeader', function($scope){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: './components/site_components/header.php',
        link: function() {
        	console.log($scope.userInfo);
        }
    };
});