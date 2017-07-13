// navList directive used for setting up the Side Navigation.
e4wApp.directive('navList', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: './components/views/navigation/side_nav.html',
        link: function() {
        	// Adding the nav-opened class to the Header, Side Navigation and Close Responsive Navigation button.
			$('#resNavOpen').click(function() {
			    $('header, .side-nav, .res-nav-close-btn-container').addClass('nav-opened');
			});

			// Removing the nav-opened class to the Header, Side Navigation and Close Responsive Navigation button.
			$('#resNavClose').click(function() {
			    $('header, .side-nav, .res-nav-close-btn-container').removeClass('nav-opened');
			});
        }
    };
});