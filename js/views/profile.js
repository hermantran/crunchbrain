define([
	'backbone',
  'state',
  'router',
	'templates'
], function(Backbone, AppState, Router, Templates) {
	'use strict';
	var profileView = Backbone.View.extend({
    tagName: 'div',
    className: 'col-lg-4 box-wrapper',
    template: Templates.profileBox,
    
    initialize: function() {
      var self = this;
      this.render();
      this.$el.on('click', '.box', function() {
        AppState.set('activeProfile', self.model);
        AppState.set('activeView', AppState.get('views').get('profileLayout'));
        Router.navigate('profile/' + self.model.get('name'));
      });
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
    }

	});

	return profileView;
});