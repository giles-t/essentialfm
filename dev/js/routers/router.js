// Mobile Router
// =============

// Includes file dependencies
define([ "jquery", "backbone", "auth", "debug",
	// View Manager
	"../framework/viewManager",
	// Views
	"../views/entry/SignInView",
	"../views/entry/SignUpView",
	"../views/explore/ExploreView",
	"../views/profile/ProfileView",
	"../views/performer/PerformerView" 
], function( $, Backbone, Auth, Debug,
	// View Manager
	viewManager,
	// Views
	EntrySignInView,
	EntrySignUpView,
	ExploreView,
	ProfileView,
	PerformerView
) {

    var Router = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {
			Debug.log('Router - Initialize!!!!');
			
			// Start listening for events
            Backbone.history.start();
        },

        // App Routes
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
			"performer/:performer": "performer"

        },

        // Entry Methods
        splash: function() {
            $.mobile.changePage( "#signUpView" , { reverse: false, changeHash: false } );
        },
        signIn: function() {
			Debug.log('Router - signIn route!!!!')
			this.navClear("topNav");
			viewManager.create('#signInView', EntrySignInView, false, false, false);
        },
        signUp: function() {
			Debug.log('Router - signUp route!!!!')
			this.navClear("topNav");
			viewManager.create('#signUpView', EntrySignUpView, false, false, false);
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
			viewManager.create('#exploreView', ExploreView, true, false, false);
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
			viewManager.create('#profileView', ProfileView, false, false, false);
        },

        // Dynamic Pages
        performer: function(performer) {
			viewManager.create('#performerView', PerformerView, true, false, false);
        },

		// This clears active nav button state
		navClear: function(nav) {
			$('.' + nav + '').find('.ui-btn-active').removeClass('ui-btn-active');
		},

    });

    // Returns the Router class
    return Router;

});