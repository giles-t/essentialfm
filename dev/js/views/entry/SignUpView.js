// Sign Up View
// =============

// Includes file dependencies
define([ "firebase", "jquery", "backbone", "auth", "debug" ], 
function( Firebase, $, Backbone, Auth, Debug ) {

    // Extends Backbone.View
    var entrySignUpView = Backbone.View.extend({

		el: $("#signUpView"),

		events: {
	    	"click #signUpEmailButton": "signUpEmail",
			"click #signUpFacebookButton": "signUpFacebook",
			"click #signUpTwitterButton": "signUpTwitter"
	  	},

        initialize: function() {
			Debug.log('View - SignUp View - Init!!!!');
			this.render();
        },

        render: function() {
			Debug.log('View - SignUp View - Render!!!!');
			$.mobile.changePage( "#signUpView" , { reverse: false, changeHash: false } );
			//$("#signUpView #signInNav").addClass("ui-btn-active");
        },

		signUpEmail: function() {
			var email = $('#signUpView #emailInput').val();
			var password = $('#signUpView #passwordInput').val();
			
			if ( email.length === 0 ) {
				$('#signUpView #incorrectEmailPopUp').popup( "open", { positionTo: 'window' } );
				return;
			}
			
			if ( password.length < 6 ) {
				$('#signUpView #incorrectPasswordPopUp').popup( "open", { positionTo: 'window' } );
				$('#signUpView #passwordInput').val('');
				return;
			}

			Debug.log('View - SignUp View - Attemping to create user ' + email + ' with ' + password);
			Auth.client.createUser(email, password, function(error, user) {
				if (!error) {
			    	Debug.log('View - SignUp View - Creating user: ' + user.id + ', Email: ' + user.email);
					Auth.client.login('password', {
						email: email,
						password: password
					});
					Auth.newUser = true;
					Auth.id = user.id;
					Auth.email = user.email;
					window.location.hash = 'stream';
					$('#signUpView #passwordInput').val('');
				} else {
					Debug.log(error);
					if ( error.code == 'INVALID_EMAIL' ) {
						$('#signUpView #incorrectEmailPopUp').popup( "open", { positionTo: 'window' } );
					} else if ( error.code == 'EMAIL_TAKEN' ) {
						$('#signUpView #takenEmailPopUp').popup( "open", { positionTo: 'window' } );
					} else {
						$('#signUpView #unknownErrorPopUp').popup( "open", { positionTo: 'window' } );
					}
				}
			});
		},
		
		signUpFacebook: function() {
			
		},
		
		signUpTwitter: function() {
			
		}
		
	});

    // Returns the View class
    return entrySignUpView;

});