// Sign In View
// =============

// Includes file dependencies
define([ "firebase", "jquery", "backbone", "auth", "models/CategoryModel" ], 
function( Firebase, $, Backbone, Auth, CategoryModel ) {

    // Extends Backbone.View
    var entrySignInView = Backbone.View.extend({

		el: $("#signIn"),

		events: {
	    	"click #signInButton": "signIn"
	  	},

        initialize: function() {
			console.log('View - Init SignIn View!!!!');
			this.render();
        },

        render: function() {
			console.log('View - Render SignIn View!!!!');
			$.mobile.changePage( "#signIn" , { reverse: false, changeHash: false } );
			$("#signIn #signInTab").addClass("ui-btn-active");
        },

		signIn: function() {
	
			console.log('Login!');
			
			var email = $('#signIn #email').val();
			var password = $('#signIn #password').val();
			
			console.log('Attemping to login ' + email + ' with ' + password);
			
			Auth.client.login('password', {
				email: email,
				password: password
			});
			
		}
		
	});

    // Returns the View class
    return entrySignInView;

} );