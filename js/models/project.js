define([
	'backbone'
], function(Backbone) {
	'use strict';
	var ProjectModel = Backbone.Model.extend({
		defaults: {
      img: "http://lorempixel.com/g/640/480/city"
    }
	});

	return ProjectModel;
});