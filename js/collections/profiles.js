define([
	"backbone",
	"models/profile"
], function(Backbone, ProfileModel) {
	var ProfilesCollection = Backbone.Collection.extend({
		model: ProfileModel
	});

	return ProfilesCollection;
});