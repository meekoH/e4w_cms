// contentHeight directive used to adjust the height of the content on the page.
e4wApp.directive('contentHeight', function($timeout) {
	return {
		// Restrict this directive to attributes (A) only.
		restrict: 'A',
		link: function(scope, element) {
			// Watch the outerHeight (calculated height with the padding for box sizing).
			scope.$watch(function() {
				return $('.content').outerHeight(true);
			},
			function(newContentHeight, oldContentHeight) {
				// If the new height of the content is different than the old height, run the scrollInit() function.
				if(newContentHeight !== oldContentHeight) {
					scrollInit();
				}
			});
		}
	}
});