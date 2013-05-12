// Sets the require.js configuration for your application.

require.config( {

      // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
      paths: {

            // Core Libraries
			"firebase": "https://cdn.firebase.com/v0/firebase",
            "jquery": "libs/jquery",
            "jquerymobile": "libs/jquerymobile",
            "underscore": "libs/lodash",
            "backbone": "libs/backbone",
			"backbonefirebase": "libs/backbone-firebase",
			"firebaseauthclient": "https://cdn.firebase.com/v0/firebase-auth-client",
			"auth": "auth"

      },

      // Sets the configuration for your third party scripts that are not AMD compatible
      shim: {

			"firebase": {
				"exports": "Firebase"  //attaches "Firebase" to the window object
			},
            "backbone": {
            	"deps": [ "underscore", "jquery" ],
                "exports": "Backbone"  //attaches "Backbone" to the window object
            },
			"backbonefirebase": {
				"deps": [ "firebase", "backbone" ],
				"exports": "BackboneFirebase"  //attaches "BackboneFirebase" to the window object
			},
			"firebaseauthclient": {
				"deps": [ "firebase", "backbonefirebase" ],
				"exports": "FirebaseAuthClient"  //attaches "FirebaseAuthClient" to the window object
			},
			"auth": {
				"deps": [ "firebase", "firebaseauthclient" ],
				"exports": "Auth"  //attaches "Auth" to the window object
			},

      } // end Shim Configuration

} );

// Includes File Dependencies
require([ 
	"firebase", 
	"jquery", 
	"backbone", 
	"backbonefirebase", 
	"firebaseauthclient", 
	"auth", 
	"routers/router" 
], function( 
	Firebase, 
	$, 
	Backbone, 
	BackboneFirebase, 
	FirebaseAuthClient, 
	Auth, 
	Router 
) {

	$( document ).on( "mobileinit",
		// Set up the "mobileinit" handler before requiring jQuery Mobile's module
		function() {
			// Prevents all anchor click handling including the addition of active button state and alternate link bluring.
			$.mobile.linkBindingEnabled = false;

			// Disabling this will prevent jQuery Mobile from handling hash changes
			$.mobile.hashListeningEnabled = false;
			
			// Turn page transitions off
			$.mobile.defaultPageTransition = "none";
			
		}
	)

	require( [ "jquerymobile" ], function() {
		// Instantiates a new Backbone.js Mobile Router
		this.router = new Router();		
	});
} );