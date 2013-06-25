// Explore View
// =============

// Includes file dependencies
define([ 'firebase', 'jquery', 'backbone', 'auth', 'debug',
	// Collections
	'../../collections/explore/ExploreCollection'
],
function( Firebase, $, Backbone, Auth, Debug,
	// Collections
	ExploreCollection
) {

    // Extends Backbone.View
    var exploreView = Backbone.View.extend({

		el: $('#exploreView'),

		events: {
	    	'click .exploreArtistsSearchButton': 'exploreArtistsSearchButton',
	    	'click .exploreLocationsSearchButton': 'exploreLocationsSearchButton',
	    	'click .exploreVenuesSearchButton': 'exploreVenuesSearchButton',
	    	'submit #exploreSearchForm': 'search'
	  	},

        initialize: function() {
			Debug.log('View - Explore View - Init!!!!');
			// Set default search values
			this.searchPrefix = '?q=';
        	this.searchType = 'performers';
        	// Create collection
			this.ExploreCollection = new ExploreCollection;
			// Render page
			this.render();
        },

        render: function() {
			Debug.log('View - Explore View - Render!!!!');
			$.mobile.changePage( '#exploreView' , { reverse: false, changeHash: false } );
			// Prevent default action of search form
			$('#exploreSearchForm').submit( function(e) {
			    e.preventDefault();
			});
        },

        search: function() {
        	var query = $('#exploreSearch').val().split(' ').join('+');
        	Debug.log('View - Explore View - Search for '+ query +' in '+ this.searchType +' !!!!');
        	this.ExploreCollection.url = 'http://api.seatgeek.com/2/'+ this.searchType + this.searchPrefix + query;
        	this.ExploreCollection.fetch({
			    success: function(collection, response){
		            console.log(collection);
		            console.log(response);
				}
			});
        },

        exploreArtistsSearchButton: function() {
        	Debug.log('View - Explore View - Explore Artists!!!!');
        	$('#exploreSearch').attr('placeholder', 'Search Artists');
        	this.searchPrefix = '?q=';
        	this.searchType = 'performers';
        },

        exploreLocationsSearchButton: function() {
        	Debug.log('View - Explore View - Explore Locations!!!!');
        	$('#exploreSearch').attr('placeholder', 'Search Locations');
        	this.searchPrefix = '?venue.city=';
        	this.searchType = 'events';
        },

        exploreVenuesSearchButton: function() {
        	Debug.log('View - Explore View - Explore Venues!!!!');
        	$('#exploreSearch').attr('placeholder', 'Search Venues');
        	this.searchPrefix = '?q=';
        	this.searchType = 'venues';
        }

	});

    // Returns the View class
    return exploreView;

} );