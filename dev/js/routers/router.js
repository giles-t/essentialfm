// Mobile Router
// =============

// Includes file dependencies
define([ "jquery", "backbone", "auth", "debug",
	// View Manager
	"../framework/viewManager",
	// Models
	"../models/CategoryModel", 
	// Collections
	"../collections/CategoriesCollection", 
	// Views
	"../views/entry/SignInView",
	"../views/entry/SignUpView",
	"../views/profile/ProfileView" 
], function( $, Backbone, Auth, Debug,
	// View Manager
	viewManager,
	// Models
	CategoryModel, 
	// Collections
	CategoriesCollection, 
	// Views
	EntrySignInView,
	EntrySignUpView,
	ProfileView
) {

    // Extends Backbone.Router
    var Router = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {
			Debug.log('Router - Initialize!!!!');
			//Auth.client;
			
            // Instantiates a new Animal Category View
            //this.animalsView = new CategoryView( { el: "#animals", collection: new CategoriesCollection( [] , { type: "animals" } ) } );

            // Instantiates a new Colors Category View
            //this.colorsView = new CategoryView( { el: "#colors", collection: new CategoriesCollection( [] , { type: "colors" } ) } );

            // Instantiates a new Vehicles Category View
            //this.vehiclesView = new CategoryView( { el: "#vehicles", collection: new CategoriesCollection( [] , { type: "vehicles" } ) } );
			
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },

        // Backbone.js Routes
        routes: {

            "": "splash",

			"signIn": "signIn",
			
			"signUp": "signUp",
			
			"tour": "tour",

			"stream": "stream",

            "explore": "explore",

			"add": "add",
			
			"activity": "activity",
			
			"profile": "profile",

        },

        // Entry Methods
        splash: function() {
            $.mobile.changePage( "#signUpView" , { reverse: false, changeHash: false } );
        },
        signIn: function() {
			Debug.log('Router - signIn route!!!!')
			this.navClear("topNav");
			viewManager.create('#signInView', EntrySignInView, false, false);
        },
        signUp: function() {
			Debug.log('Router - signUp route!!!!')
			this.navClear("topNav");
			viewManager.create('#signUpView', EntrySignUpView, false, false);
        },
        tour: function() {
			this.navClear("topNav");
            $.mobile.changePage( "#tourView" , { reverse: false, changeHash: false } );
        },

        // Main Page Methods
        stream: function() {
			this.navClear('bottomNav');
            $.mobile.changePage( "#streamView" , { reverse: false, changeHash: false } );
        },
        explore: function() {
			this.navClear('bottomNav');
            $.mobile.changePage( "#exploreView" , { reverse: false, changeHash: false } );
        },
        add: function() {
			this.navClear('bottomNav');
            $.mobile.changePage( "#addView" , { reverse: false, changeHash: false } );
        },
        activity: function() {
			this.navClear('bottomNav');
            $.mobile.changePage( "#activityView" , { reverse: false, changeHash: false } );
        },
        profile: function() {
			this.navClear('bottomNav');
			viewManager.create('#profileView', ProfileView, false, false);
        },

		// This clears active nav button state
		navClear: function(nav) {
			$('.' + nav + '').find('.ui-btn-active').removeClass('ui-btn-active');
		},

    });

    // Returns the Router class
    return Router;

});