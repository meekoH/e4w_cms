// Structural variables.
var header = $('header');
var footer = $('footer');
var contentWrapper = $('.content-wrapper');

// scrollInit sets up the Side Navigation height and checks for mobile media queries.
function scrollInit() {
	//***** Navigation Requirements
	//* The following stuff is required for sizing the Side Navigation appropriately.
	//*****

	// Create an empty variable we'll use later.
	var sideNavHeight;
	// Get the Window height.
	var winHeight = $(window).height();
	// Get the Content height.
	var contentHeight = contentWrapper.outerHeight();
	// Get the Header height.
	var headerHeight = header.outerHeight();
	// Get the Content & Header height together (because of the margin it adds).
	var totalContentHeight = contentHeight + headerHeight;
	// Get the Footer height.
	var footerHeight = footer.outerHeight();
	// Get the Window height without the Footer.
	var totalWindowHeight = winHeight - footerHeight;

	// Calculate what the height of the Side Navigation Bar should be.
	sideNavHeight =  winHeight - (headerHeight + footerHeight);

	// This if condition is used to check if the Side Navigations height is less than the height on the content.
	if (sideNavHeight < contentHeight) {
		sideNavHeight = contentHeight;
	}

	// Set the styling on the Content Wrapper and Side Nav.
	contentWrapper.css({'margin-top' : headerHeight});
	$('.side-nav').css({'margin-top' : headerHeight, 'min-height' : sideNavHeight});
	$('.res-nav-open-btn-container').css({'top' : headerHeight});

	//***** Mobile Media Query Requirements
	//* The following stuff is required for checking whether the browser is sized for mobile.
	//*****

	// Set where the mobile media query kicks in.
	var mobileBreakPoint = 564;
	// Get the Window width.
	var winWidth = $(window).width();

	// If the window width is less than the mobile media query, add the is-mobile class to the body.
	if (winWidth <= mobileBreakPoint) {
		$('body').addClass('is-mobile');

		if (totalWindowHeight > totalContentHeight) {
			$('footer').addClass('fixed-footer');
		} else {
			$('footer').removeClass('fixed-footer');
		}
	} else {
		$('body').removeClass('is-mobile');
		$('.side-nav').removeClass('nav-opened');
		$('.res-nav-close-btn-container').removeClass('nav-opened');
	}
}

$(window).scroll(scrollInit);
$(window).resize(scrollInit);

// Needed a setTimeout due to the rendering of the angular app itself.
setTimeout(function() {
	scrollInit();
}, 100);