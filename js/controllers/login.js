// Define the AngularJS application.
e4wApp.controller('e4wLoginCtrl', function($scope, $http, userLoginService) {
    // When the content is loaded, run the scrollInit() function to adjust the height of the content.
    $scope.$on('$viewContentLoaded', function () {
        scrollInit();
    });

    // $scope.loginCtrl = function(loginDetails) {
    //     $http.post('./components/get_login_details.php', {
    //         "login_email" : loginDetails.login_email,
    //         "login_password" : loginDetails.login_password
    //     })
    //     .success(function(data) {
    //         getUserInfo();
    //         window.location.href = '#/dashboard';
    //     });
    // }

    // var getUserInfo = function() {
    //     userInfoService
    //     .getUser()
    //     .then(function(data) {
    //         $scope.userInfo = data;
    //     }, function(error) {
    //         console.log('error', error);
    //     });
    // };
});