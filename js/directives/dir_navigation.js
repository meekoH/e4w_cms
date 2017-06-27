// Let's set up a directive for the navigation.
e4wApp.directive('navList', function(){
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: './components/views/navigation/side_nav.html'
    };
});