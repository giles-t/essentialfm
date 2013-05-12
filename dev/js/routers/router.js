// Mobile Router
// =============

// Includes file dependencies
define([ "jquery", "backbone", "auth",
	// Models
	"../models/CategoryModel", 
	// Collections
	"../collections/CategoriesCollection", 
	// Views
	"../views/entry/SignInView",
	"../views/profile/ProfileView" 
], function( $, Backbone, Auth,
	// Models
	CategoryModel, 
	// Collections
	CategoriesCollection, 
	// Views
	EntrySignInView,
	ProfileView
) {

    // Extends Backbone.Router
    var Router = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {
			
			Auth.client;
/*			this.firebase = new Firebase('https://essential.firebaseio.com');
			this.authClient = new FirebaseAuthClient(this.firebase, function(error, user) {
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
			}); */	
			
            // Instantiates a new Animal Category View
            //this.animalsView = new CategoryView( { el: "#animals", collection: new CategoriesCollection( [] , { type: "animals" } ) } );

            // Instantiates a new Colors Category View
            //this.colorsView = new CategoryView( { el: "#colors", collection: new CategoriesCollection( [] , { type: "colors" } ) } );

            // Instantiates a new Vehicles Category View
            //this.vehiclesView = new CategoryView( { el: "#vehicles", collection: new CategoriesCollection( [] , { type: "vehicles" } ) } );
			
			// View Manager Array
			this.viewList = [];
			
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },

        // Backbone.js Routes
        routes: {

            "": "splash",

			"signIn": "signIn",
			
			"signUp": "signUp",

			"stream": "stream",

            "explore": "explore",

			"add": "add",
			
			"activity": "activity",
			
			"profile": "profile",

        },

        // Entry Methods
        splash: function() {
            $.mobile.changePage( "#signUp" , { reverse: false, changeHash: false } );
        },
        signIn: function() {
			console.log('Router - signIn route!!!!')
			this.navClear("topNav");
			this.viewManager('#signIn', EntrySignInView, false, false);
        },
        signUp: function() {
			this.navClear("topNav");
            $.mobile.changePage( "#signUp" , { reverse: false, changeHash: false } );
        },

        // Main Page Methods
        stream: function() {
			this.navClear('bottomNav');
            $.mobile.changePage( "#stream" , { reverse: false, changeHash: false } );
        },
        explore: function() {
			this.navClear('bottomNav');
            $.mobile.changePage( "#explore" , { reverse: false, changeHash: false } );

        },
        add: function() {
			this.navClear('bottomNav');
            $.mobile.changePage( "#add" , { reverse: false, changeHash: false } );

        },
        activity: function() {
			this.navClear('bottomNav');
            $.mobile.changePage( "#activity" , { reverse: false, changeHash: false } );

        },
        profile: function() {
			this.navClear('bottomNav');
			new ProfileView;
        },

		// Helper Methods
		viewManager: function(viewName, view, reverse, changeHash) {
			// This is the view manager it kills zombie view before they happen.
			console.log(this.viewList);
			if ( this.viewList.indexOf(viewName) === -1 ) {
				console.log('View Manager - view ' + viewName + ' does not exist, creating view!!!!');
				new view;
				this.viewList.push(viewName);
			} else {
				console.log('View Manager - view ' + viewName + ' already exists, changing page!!!!');
				$.mobile.changePage( viewName, { reverse: reverse, changeHash: changeHash } );
			}
		},
		navClear: function(nav) {
			$('.' + nav + '').find('.ui-btn-active').removeClass('ui-btn-active');
		},

    });

    // Returns the Router class
    return Router;

});