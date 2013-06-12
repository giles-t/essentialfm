// Sign In View
// =============

// Includes file dependencies
define([ "firebase", "jquery", "backbone", "auth", "debug" ], 
function( Firebase, $, Backbone, Auth, Debug ) {

    // Extends Backbone.View
    var entrySignInView = Backbone.View.extend({

		el: $("#signInView"),

		events: {
	    	"click #signInButton": "signIn"
	  	},

        initialize: function() {
			Debug.log('View - SignIn View - Init!!!!');
			this.render();
        },

        render: function() {
			Debug.log('View - SignIn View - Render!!!!');
			$.mobile.changePage( "#signInView" , { reverse: false, changeHash: false } );
			$("#signInView #signInNav").addClass("ui-btn-active");
        },

		signIn: function() {
			var email = $('#signInView #emailInput').val();
			var password = $('#signInView #passwordInput').val();
			
			Debug.log('View - SignIn View - Attemping to login ' + email + ' with ' + password);
			
			Auth.client.login('password', {
				email: email,
				password: password
			});
			$('#signInView #passwordInput').val('');
		}
		
	});

    // Returns the View class
    return entrySignInView;

} );