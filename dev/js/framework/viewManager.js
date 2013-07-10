// This handels all debugging

define([ 'backbone', 'debug' ], 
function( Backbone, Debug ) {
	
	var viewManager = {};
	
	// An array for the list of views
	viewManager.viewList = [];
	// An array of view objects
	viewManager.views = [];
	
	// Checks to see if a view already exists and reuses it if so
	viewManager.create = function(viewName, view, destroy, reverse, changeHash) {
		// Check if the view already exists in the viewManager
		var viewSearch = viewManager.viewList.indexOf(viewName);
		// if ( viewSearch !== -1 && destroy === true ) { // If destroy is true remove the view
		// 	// Create View
		// 	Debug.log('View Manager - view ' + viewName + ' already exists, changing page and resetting collection!!!!');
		// 	viewManager.views[viewSearch].resetCollection();
		// 	$.mobile.changePage( viewName, { reverse: reverse, changeHash: changeHash } );
		// 	// var newView = new view;
		// 	// newView.name = viewName;
		// 	// viewManager.viewList.push(viewName);
		// 	// viewManager.views.push(newView);
		// 	Debug.log('View Manager - Active Views: ' + viewManager.viewList + "!!!!");
		// } else 
		if ( viewSearch === -1 ) { // If view doesn't exist create one
			Debug.log('View Manager - view ' + viewName + ' does not exist, creating view!!!!');
			var newView = new view;
			newView.name = viewName;
			viewManager.viewList.push(viewName);
			viewManager.views.push(newView);
			Debug.log('View Manager - Active Views: ' + viewManager.viewList + "!!!!");
		} else { // If view exists change page to view
			Debug.log('View Manager - view ' + viewName + ' already exists, changing page!!!!');
			$.mobile.changePage( viewName, { reverse: reverse, changeHash: changeHash } );
			Debug.log('View Manager - Active Views: ' + viewManager.viewList + "!!!!");
		}
	}

    return viewManager;

});
