// Profile View
// =============

// Includes file dependencies
define([ "firebase", "jquery", "backbone", "auth", "debug",
	// Collections
	'../../collections/profile/ProfileCollection',
	// Models
	'../../models/profile/ProfileModel'
], 
function( Firebase, $, Backbone, Auth, Debug,
	// Collections
	ProfileCollection,
	// Models
	ProfileModel
) {

    // Extends Backbone.View
    var ProfileView = Backbone.View.extend({

		el: $("#profileView"),

		events: {
	    	"click #signOutButton": "signOut"
	  	},

        initialize: function() {	
			Debug.log('View - Profie View - Init!!!!');
			var that = this;
			this.ProfileModel = new ProfileModel({id: 2});
			this.ProfileModel.set({following: "20", followers: "4234"});
			this.ProfileModel.save();
			this.ProfileModel.fetch({
				success: function (model, response, options) {
					Debug.log('View - Profie View - Init - Fetch Success!!!!');
					Debug.log(model);
					Debug.log(response);
					Debug.log(options);
					that.render();
				},
				error: function () {
					Debug.log('View - Profie View - Init - Fetch Failed!!!!');
					alert('Something went wrong!');
				}
			});
        },

        render: function() {
			Debug.log('View - Profile View - Render!!!!');
            $.mobile.changePage( "#profileView" , { reverse: false, changeHash: false } );
        },

		signOut: function() {
			Debug.log('View - Profile View - Signout!!!!');
			Auth.client.logout();
			window.location.hash = 'signIn';
		}
		
	});

    // Returns the View class
    return ProfileView;

} );