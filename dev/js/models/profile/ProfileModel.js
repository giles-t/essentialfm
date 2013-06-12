// Profile Model
// ==============

// Includes file dependencies
define([ "firebase", "backbonefirebase", "jquery", "backbone", "auth", "debug" ], function( Firebase, BackboneFirebase, $, Backbone, Auth, Debug ) {

    // The Model constructor
    var ProfileModel = Backbone.Model.extend( {

		initialize: function () {
			Debug.log('Model - Profie Model - Init!!!!');
		},

		firebase: new Backbone.Firebase("https://essential.firebaseio.com/users"),

    });

    // Returns the Model class
    return ProfileModel;

} );
