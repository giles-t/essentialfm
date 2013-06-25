// Add Event View
// =============

// Includes file dependencies
define([ "firebase", "jquery", "backbone", "auth", "debug" ], 
function( Firebase, $, Backbone, Auth, Debug ) {

    // Extends Backbone.View
    var addEventView = Backbone.View.extend({

		el: $("#addEventView"),

		events: {
	    	"click #signInButton": "signIn"
	  	},

        initialize: function() {
			Debug.log('View - Add Event View - Init!!!!');
			this.render();
        },

        render: function() {
			Debug.log('View - Add Event View - Render!!!!');
			$.mobile.changePage( "#addEventView" , { reverse: false, changeHash: false } );
        },
		
	});

    // Returns the View class
    return addEventView;

} );