// Profile Model
// ==============

// Includes file dependencies
define([ "firebase", "backbonefirebase", "jquery", "backbone", "auth", "debug" ], function( Firebase, BackboneFirebase, $, Backbone, Auth, Debug ) {

    // The Model constructor
    var ProfileModel = Backbone.Firebase.Model.extend( {

		initialize: function () {
			Debug.log('Model - Profie Model - Init!!!!');

			// Set the profile ID and point to their Firebase
			this.set({id: Auth.id});
			this.firebase = 'https://essential.firebaseio.com/users/' + this.id;
		},

		newUser: function () {
			Debug.log('Model - Profie Model - newUser!!!!');
			this.set({
				email: Auth.email,
				followers: 0,
				following: 0,
				videos: 0,
				photos: 0
			});
		}

    });

    // Returns the Model class
    return ProfileModel;

} );
