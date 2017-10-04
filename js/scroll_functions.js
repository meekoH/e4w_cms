// Structural variables.
var footer = $('footer');
var contentWrapper = $('.content-wrapper');
var content = $('.content');
// Set where the mobile media query kicks in.
var mobileBreakPoint = 564;

// scrollInit sets up the Side Navigation height and checks for mobile media queries.
function scrollInit() {
	//***** Navigation Requirements
	//* The following is required for sizing the Side Navigation appropriately.
	//*****

	var header = $('header');
	// Create an empty variable we'll use later.
	var sideNavHeight;
	// Get the Window height.
	var winHeight = $(window).height();
	// Get the Content height.
	var contentHeight = $('.content').outerHeight(true);
	// Get the Header height.
	var headerHeight = header.outerHeight(true);
	// Get the Content Wrapper & Header height together (because of the margin it adds).
	var totalContentHeight = contentHeight + headerHeight;
	// Get the Footer height.
	var footerHeight = footer.outerHeight(true);
	// Get the Window height without the Footer.
	var totalWindowHeight = winHeight - footerHeight;

	// Calculate what the height of the Side Navigation Bar should be.
	sideNavHeight =  winHeight - (headerHeight + footerHeight);

	// This if () condition is used to check if the Side Navigation height is less than the height on the content.
	if (sideNavHeight < contentHeight) {
		// If it is, then set the max-height of the Side Nav to be the same height as the Content.
		sideNavHeight = contentHeight;
	}

	// Set the styling on the Content Wrapper and Side Nav.
	contentWrapper.css({'margin-top' : headerHeight, 'height' : contentHeight});
	$('.side-nav').css({'margin-top' : headerHeight, 'min-height' : sideNavHeight});
	$('.res-nav-open-btn-container').css({'top' : headerHeight});

	//***** Mobile Media Query Requirements
	//* The following stuff is required for checking whether the browser is sized for mobile.
	//*****

	// Get the Window width.
	var winWidth = $(window).width();

	// If the window width is less than the mobile media query, add the is-mobile class to the body.
	if (winWidth <= mobileBreakPoint) {
		$('body').addClass('is-mobile');

		// If the site is mobile, check if the Footer needs to be fixed.
		// We fix the Footer to the bottom of the page if there is less content than Window Height.
		if (totalWindowHeight > totalContentHeight) {
			$('footer').addClass('fixed-footer');
		// Otherwise the Footer should be relative to adjust with the content.
		} else {
			$('footer').removeClass('fixed-footer');
		}
	// Otherwise we're not mobile, so remove the is-mobile class from the body.
	} else {
		$('body').removeClass('is-mobile');
		// Also remove the nav-opened class from the Header, Side Navigation and Close Responsive Navigation button.
		// When switching from Portrait to Landscape on Mobile, we hide the Responsive Navigation.
		$('header, .side-nav, .res-nav-close-btn-container').removeClass('nav-opened');
	}
}

// Run the scrollInit() pretty much anytime something happens. This is to ensure that are our styles are always set correctly.
$(window).scroll(scrollInit);
$(window).resize(scrollInit);
// scrollInit();

// We're also going to run scrollInit() if the device orientation changes.
// We do this because we want to adjust the min-height on the Side Navigation and ensure we remove any Mobile related classes.
// The delay is to ensure the content has had a chance to adjust on the device before running scrollInit() again.
window.addEventListener("orientationchange", function() {
	setTimeout(function(){
		scrollInit();
	}, 400);
}, false);