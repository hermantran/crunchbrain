define([
  'backbone',
  'state',
  'router',
  'templates'
], function(Backbone, AppState, Router, Templates) {
  'use strict';
  var projectView = Backbone.View.extend({
    tagName: 'div',
    className: 'col-lg-4 box-wrapper',
    template: Templates.box,
    
    initialize: function() {
      var self = this;
      this.render();

      this.listenTo(this.model, 'change', this.render);
      this.$el.on('click', '.box', function() {
        AppState.set('activeProject', self.model);
        AppState.set('activeView', AppState.get('views').get('projectLayout'));
        Router.navigate("project/" + self.model.get('title'));
      });
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

  return projectView;
});