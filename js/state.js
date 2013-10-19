define([
	"backbone",
	"models/project"
], function(Backbone, ProjectModel) {
	'use strict';
	var Container = Backbone.Model.extend();

	var AppState = Backbone.Model.extend({
		defaults: {
			collections: new Container(),
			views: new Container(),
			activeProject: new ProjectModel()
		}
	});

	return new AppState();
});