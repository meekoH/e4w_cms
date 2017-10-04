// Define the AngularJS application.
e4wApp.controller('e4wLoginCtrl', function($scope, $http, $location, userLoginService) {
    // When the content is loaded, run the scrollInit() function to adjust the height of the content.
    $scope.$on('$viewContentLoaded', function () {
        scrollInit();
    });

    $scope.userLogin = function(currentUser) {
        userLoginService.logUserIn(currentUser)
            .then(function(response) {
                $scope.userInfo = response;
                console.log($scope.userInfo.userFirstName);
                // $location.path('/dashboard');
            }, function(error) {
                console.log('Houston, we have more problems');
            });
    };
});