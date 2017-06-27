// Define the AngularJS application.
e4wApp.controller('e4wLoginCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.$on('$viewContentLoaded', function () {
        scrollInit();
    });
    
    $scope.loginCtrl = function(loginDetails) {
        $http.post('./components/get_login_details.php', {
            "login_email" : loginDetails.login_email,
            "login_password" : loginDetails.login_password
        })
        .success(function(data) {
            if (data == 'true') {
                window.location.href = '#/dashboard';
            }
        });
    }
}]);