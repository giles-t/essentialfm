// This handels all authentication

define([ "firebase", "firebaseauthclient" ], 
function( Firebase, FirebaseAuthClient ) {
	
	console.log("Auth Global!");
	var auth = {};
	auth.firebase = new Firebase('https://essential.firebaseio.com');
	auth.client = new FirebaseAuthClient(auth.firebase, function(error, user) {
		if (error) {
			// an error occurred while attempting login
			console.log(error);
		} else if (user) {
			// user authenticated with Firebase
			console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
			window.location.hash = 'profile';
		} else {
			console.log("No session, directing to login page.")
			window.location.hash = 'signin';
		}
	});
	
    return auth;

});