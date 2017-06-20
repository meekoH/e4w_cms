// Set up the Navigation Height
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
	// This if condition is used if there is not enough content to fill the screen.
	if (winHeight > contentHeight) {
		sideNavHeight =  winHeight - (headerHeight + footerHeight);
	}
	// This if condition is used to check if the Side Navigations height is less than the height on the content.
	if (sideNavHeight < contentHeight) {
		sideNavHeight = contentHeight;
	}

	// Set the styling on the Content Wrapper and Side Nav.
	contentWrapper.css({'margin-top' : headerHeight});
	sideNav.css({'margin-top' : headerHeight, 'min-height' : sideNavHeight});
}


$(window).scroll(scrollInit);
$(window).resize(scrollInit);
scrollInit();