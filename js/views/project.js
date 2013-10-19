define([
	"backbone",
	"templates"
], function(Backbone, Templates) {
	'use strict';
	var projectView = Backbone.View.extend({
    tagName: 'div',
    className: 'col-lg-4 box-wrapper',
    template: Templates.box,
    
    initialize: function() {
      console.log(this.model);
      this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
    }

	});

	return projectView;
});