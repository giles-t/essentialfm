// This handels all debugging

define([ "debug" ], 
function( Debug) {
	
	var viewManager = {};
	
	// An array for the list of views
	viewManager.viewList = [];
	
	// Checks to see if a view already exists and reuses it if so
	viewManager.create = function(viewName, view, reverse, changeHash) {
		if ( viewManager.viewList.indexOf(viewName) === -1 ) {
			Debug.log('View Manager - view ' + viewName + ' does not exist, creating view!!!!');
			new view;
			viewManager.viewList.push(viewName);
			Debug.log('View Manager - Active Views: ' + viewManager.viewList + "!!!!");
		} else {
			Debug.log('View Manager - view ' + viewName + ' already exists, changing page!!!!');
			$.mobile.changePage( viewName, { reverse: reverse, changeHash: changeHash } );
		}
	}
	
    return viewManager;

});