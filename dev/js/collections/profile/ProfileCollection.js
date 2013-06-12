// Profile Collection
// ==============

// Includes file dependencies
define([ "firebase", "backbonefirebase", "jquery", "backbone", "auth", "debug",
    // Models
    '../../models/profile/ProfileModel'
], function( Firebase, BackboneFirebase, $, Backbone, Auth, Debug,
    // Models
    ProfileModel
) {

    // The Collection constructor
    var ProfileCollection = Backbone.Collection.extend( {

        model: ProfileModel,

        url: '/',

        initialize: function () {
            Debug.log('Collection - Profie Collection - Init!!!!');
        },

        firebase: new Backbone.Firebase("https://essential.firebaseio.com/users"),

    });

    // Returns the Model class
    return ProfileCollection;

} );