// App Entry

require.config( {

      paths: {

            // Core Libraries
			"firebase": "https://cdn.firebase.com/v0/firebase",
            "jquery": "libs/jquery", // 2.0
            "jquerymobile": "libs/jquerymobile", // 1.3.1
            "underscore": "libs/lodash", // 1.2.1
            //"underscore": "libs/underscore", // 1.4.4
            "backbone": "libs/backbone", // 1.0.0
            //"backbone": "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min",
			"backbonefirebase": "libs/backbone-firebase", // June 8th, 2013
			"firebaseauthclient": "https://cdn.firebase.com/v0/firebase-auth-client",
			"auth": "framework/auth",
			"debug": "framework/debug"

      },

      // Sets the configuration for third party scripts that are not AMD compatible
      shim: {

			"firebase": {
				"exports": "Firebase"  //attaches "Firebase" to the window object
			},
            "backbone": {
            	"deps": [ "firebaseauthclient", "underscore", "jquery" ],
                "exports": "Backbone"  //attaches "Backbone" to the window object
            },
			"backbonefirebase": {
				"deps": [ "backbone" ],
			},
			"firebaseauthclient": {
				"deps": [ "firebase" ],
				"exports": "FirebaseAuthClient"
			},
			"auth": {
				"deps": [ "firebaseauthclient" ],
				//"exports": "Auth"
			},
			"debug": {
				"deps": [ "firebase", "firebaseauthclient" ],
				//"exports": "Debug"
			}

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
	"debug",
	"routers/router" 
], function( 
	Firebase, 
	$, 
	Backbone, 
	BackboneFirebase, 
	FirebaseAuthClient, 
	Auth, 
	Debug,
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
			$.mobile.defaultPageTransition = "fade";
			
		}
	)
	
	require( [ "jquerymobile" ], function() {
		this.router = new Router();		
	});
} );