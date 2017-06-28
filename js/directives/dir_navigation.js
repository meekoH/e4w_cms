// navList directive used for setting up the Side Navigation.
e4wApp.directive('navList', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: './components/views/navigation/side_nav.html'
    };
});