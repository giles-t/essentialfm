// Profile View
// =============

// Includes file dependencies
define([ "firebase", "jquery", "backbone", "auth" ], 
function( Firebase, $, Backbone, Auth ) {

    // Extends Backbone.View
    var ProfileView = Backbone.View.extend({

		el: $("#profileView"),

		events: {
	    	"click #signOutButton": "signOut"
	  	},

        initialize: function() {	
			console.log('Init Profie View!!!!!');
			this.undelegateEvents();
			this.render();
        },

        render: function() {
            $.mobile.changePage( "#profileView" , { reverse: false, changeHash: false } );
        },

		signOut: function() {
			console.log('Signing out!');
			Auth.client.logout();
			window.location.hash = 'signin';
		}
		
	});

    // Returns the View class
    return ProfileView;

} );