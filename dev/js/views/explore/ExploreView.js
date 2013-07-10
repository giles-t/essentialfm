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
            'touchstart .exploreArtistsSearchButton': 'exploreArtistsSearchButton',
            'touchstart .exploreLocationsSearchButton': 'exploreLocationsSearchButton',
            'touchstart .exploreVenuesSearchButton': 'exploreVenuesSearchButton',
	    	'submit #exploreSearchForm': 'search',
            'click .exploreList li': 'exploreListItemSelect'
	  	},

        initialize: function() {
			Debug.log('View - Explore View - Init!!!!');
			// Set default search values
			this.searchPrefix = '?q=';
        	this.searchType = 'performers';
        	// Create collection
			this.ExploreCollection = new ExploreCollection;
            console.log(this.ExploreCollection);
			// Render page
			this.render();
            // Prevent default action of search form
            $('#exploreSearchForm').submit( function(e) {
                e.preventDefault();
            });
        },

        render: function() {
			Debug.log('View - Explore View - Render!!!!');
			$.mobile.changePage( '#exploreView' , { reverse: false, changeHash: false } );
        },

        search: function() {
            // Join the search query for the API call
        	var query = $('#exploreSearch').val().split(' ').join('+');
        	Debug.log('View - Explore View - Search for '+ query +' in '+ this.searchType +' !!!!');
        	// Set the API URL on the collection
            this.ExploreCollection.url = 'http://api.seatgeek.com/2/'+ this.searchType + this.searchPrefix + query;
        	var that = this;
        	// Fetch from the API and populate the collection
            this.ExploreCollection.fetch({
			    success: function(collection, response){
		            console.log(collection);
		            console.log(response);
		            that.updateExploreList();
				}
			});
            // Focus out of search form to hide keyboard
            $('#exploreSearch').blur();
        },

        exploreArtistsSearchButton: function() {
        	Debug.log('View - Explore View - Explore Artists!!!!');
            // Set the search placeholder
        	$('#exploreSearch').attr('placeholder', 'Search Artists');
            // Set the seach type and prefix for the API
        	this.searchPrefix = '?q=';
        	this.searchType = 'performers';
            // Set the response to parse
            this.ExploreCollection.parse = function(response) {
                console.log(response.performers);
                return response.performers;
            }
        },

        exploreLocationsSearchButton: function() {
        	Debug.log('View - Explore View - Explore Locations!!!!');
            // Set the search placeholder
        	$('#exploreSearch').attr('placeholder', 'Search Locations');
            // Set the seach type and prefix for the API
        	this.searchPrefix = '?venue.city=';
        	this.searchType = 'events';
            // Set the response to parse
            this.ExploreCollection.parse = function(response) {
                console.log(response.events);
                return response.events;
            }
        },

        exploreVenuesSearchButton: function() {
        	Debug.log('View - Explore View - Explore Venues!!!!');
            // Set the search placeholder
        	$('#exploreSearch').attr('placeholder', 'Search Venues');
            // Set the seach type and prefix for the API
        	this.searchPrefix = '?q=';
        	this.searchType = 'venues';
            // Set the response to parse
            this.ExploreCollection.parse = function(response) {
                console.log(response.venues);
                return response.venues;
            }
        },

        updateExploreList: function() {
        	Debug.log('View - Explore View - Update Explore List!!!!');
        	// Sets the view's template property
            this.template = _.template( $( 'script#exploreItems' ).html(), { "collection": this.ExploreCollection } );
            // Renders the view's template inside of the current listview element
            this.$el.find('.exploreList ul').html(this.template);
        },

        exploreListItemSelect: function(e) {
            Debug.log('View - Explore View - List Item Selected!!!!');
            var target = $(e.target).closest('li').attr('exploreItemId');
            Debug.log(target);
            window.location.hash = '/performer/' + target;
        }

	});

    // Returns the View class
    return exploreView;

} );