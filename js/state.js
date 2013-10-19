define([
	"backbone"
], function(Backbone) {
	'use strict';
	var Container = Backbone.Model.extend();

	var AppState = Backbone.Model.extend({
		defaults: {
			collections: new Container(),
			views: new Container()
		}
	});

	return new AppState();
});