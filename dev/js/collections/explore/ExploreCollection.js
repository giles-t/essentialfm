// Explore Collection
// ==============

// Includes file dependencies
define([ "firebase", "backbonefirebase", "jquery", "backbone", "auth", "debug",
    // Models
    '../../models/explore/ExploreModel'
], 
function( Firebase, BackboneFirebase, $, Backbone, Auth, Debug,
    // Models
    ExploreModel
) {

    // The Collection constructor
    var ExploreCollection = Backbone.Collection.extend( {

        model: ExploreModel,

        // Must be set dynamically before a fetch
        //url: 'http://api.seatgeek.com/2/',

        initialize: function () {
            Debug.log('Collection - Explore Collection - Init!!!!');
        },

    });

    // Returns the Model class
    return ExploreCollection;

} );