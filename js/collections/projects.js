define([
	"backbone",
	"models/project"
], function(Backbone, ProjectModel) {
	var ProjectsCollection = Backbone.Collection.extend({
		model: ProjectModel
	});

	return ProjectsCollection;
});