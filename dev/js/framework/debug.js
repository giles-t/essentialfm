// This handels all debugging

define([ "firebase", "firebaseauthclient" ], 
function( Firebase, FirebaseAuthClient ) {
	
	var debug = {};
	
	// Config Vars
	debug.showLogs = true;
	
	if (debug.showLogs) {
		console.log("Debug - Init!!!!");
	}
	
	// Debug Methods
	debug.log = function (message) {
		if (debug.showLogs) {
			console.log(message);
		}
	}
	
    return debug;

});