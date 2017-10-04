e4wApp.factory('userLoginService', function($http) {
	var logUserIn = function(currentUser) {
		return $http.get('./components/get_login_details.php', {
			params: {
				user_email: currentUser.login_email,
				user_pw: currentUser.login_password
			}
		})
		.then(function(response) {
			var userObj = {
				userID: response.data.login_id,
				userEmail: response.data.login_email,
				userFirstName: response.data.login_first_name,
				userLastName: response.data.login_last_name
			}
			return userObj;
		}, function(error) {
			console.log('Houston, we have a problem.');
		});
	};

	return {
		logUserIn : logUserIn
	};
});