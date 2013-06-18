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
			// Create the users profile
			this.ProfileModel = new ProfileModel;
			// Listen to changes on the users profile
			this.listenTo(this.ProfileModel, 'change:followers', this.updateFollowers);
			this.listenTo(this.ProfileModel, 'change:following', this.updateFollowing);
			this.listenTo(this.ProfileModel, 'change:photos', this.updatePhotos);
			this.listenTo(this.ProfileModel, 'change:videos', this.updateVideos);
			// If this is a new user, create their profile
			if (Auth.newUser) { this.ProfileModel.newUser(); }
			// Render the View
			this.render();
	  },

	  render: function() {
			Debug.log('View - Profile View - Render!!!!');
	    $.mobile.changePage( "#profileView" , { reverse: false, changeHash: false } );
	  },

		signOut: function() {
			Debug.log('View - Profile View - Signout!!!!');
			Auth.client.logout();
			window.location.hash = 'signIn';
		},

		updateFollowers: function() {
			Debug.log('View - Profile View - updateFollowers!!!!');
			$('#profileView .followers').html( this.ProfileModel.get('followers') );
		},

		updateFollowing: function() {
			Debug.log('View - Profile View - updateFollowing!!!!');
			$('#profileView .following').html( this.ProfileModel.get('following') );
		},

		updatePhotos: function() {
			Debug.log('View - Profile View - updatePhotos!!!!');
			$('#profileView .photos').html( this.ProfileModel.get('photos') );
		},

		updateVideos: function() {
			Debug.log('View - Profile View - updateVideos!!!!');
			$('#profileView .videos').html( this.ProfileModel.get('videos') );
		}

	});

	// Returns the View class
	return ProfileView;

} );