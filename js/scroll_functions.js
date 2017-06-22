// Structural variables.
var header = $('header');
var sideNav = $('nav');
var footer = $('footer');
var contentWrapper = $('.content-wrapper');

// scrollInit sets up the Side Navigation height and consistently runs on scroll or resize.
function scrollInit() {
	// Create an empty variable we'll use later.
	var sideNavHeight;
	// Get the Window height.
	var winHeight = $(window).height();
	// Get the Content height.
	var contentHeight = contentWrapper.outerHeight();
	// Get the Header height.
	var headerHeight = header.outerHeight();
	// Get the Footer height.
	var footerHeight = footer.outerHeight();

	// Calculate what the height of the Side Navigation Bar should be.
	sideNavHeight =  winHeight - (headerHeight + footerHeight);

	// This if condition is used to check if the Side Navigations height is less than the height on the content.
	if (sideNavHeight < contentHeight) {
		sideNavHeight = contentHeight;
	}

	// Set the styling on the Content Wrapper and Side Nav.
	contentWrapper.css({'margin-top' : headerHeight});
	$('.side-nav').css({'margin-top' : headerHeight, 'min-height' : sideNavHeight});
}

$(window).scroll(scrollInit);
$(window).resize(scrollInit);

// Needed a setTimeout due to the rendering of the angular app itself.
setTimeout(function() {
	scrollInit();
}, 100);