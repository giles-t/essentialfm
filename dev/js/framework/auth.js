// This handels all authentication

define([ "firebase", "firebaseauthclient", "debug" ], 
function( Firebase, FirebaseAuthClient, Debug ) {
	
	Debug.log("Auth - Init!!!!");
	var auth = {};
	
	// Firebase Reference
	auth.firebase = new Firebase('https://essential.firebaseio.com');
	// Firebase Session Check
	auth.client = new FirebaseAuthClient(auth.firebase, function(error, user) {
		if (error) {
			// an error occurred while attempting login
			Debug.log('Auth - Client - Error!!!!')
			Debug.log(error);
		} else if (user) {
			// user authenticated with Firebase
			Debug.log('Auth - Client - User ID: ' + user.id + ', Provider: ' + user.provider + '!!!!');
			auth.id = user.id;
			auth.email = user.email;
			window.location.hash = 'stream';
		} else {
			Debug.log("Auth - Client - No session, directing to login page!!!!");
			auth.id = null;
			auth.email = null;
			window.location.hash = 'signIn';
		}
	});
	// Set the new user flag to false
	auth.newUser = false;
	
    return auth;

});