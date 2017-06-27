// Setting up the Content Height controller.
e4wApp.directive('contentHeight', function() {
	return {
		restrict: 'A',
		link: function(scope, element) {
			scope.$watch(function() {
				return $('.content').outerHeight(true);
			},
			function(newContentHeight, oldContentHeight) {
				if(newContentHeight !== oldContentHeight) {
					scrollInit();
				}
			});
		}
	}
});