// Explore Model
// ==============

// Includes file dependencies
define([ "firebase", "backbonefirebase", "jquery", "backbone", "auth", "debug" ], function( Firebase, BackboneFirebase, $, Backbone, Auth, Debug ) {

    // The Model constructor
    var ExploreModel = Backbone.Model.extend( {

		initialize: function () {
			Debug.log('Model - Explore Model - Init!!!!');
		},

    });

    // Returns the Model class
    return ExploreModel;

} );
