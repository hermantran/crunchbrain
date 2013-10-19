define([
  "backbone",
  "templates",
  "state",
], function(Backbone, Templates, AppState) {
  var ProjectLayoutView = Backbone.View.extend({
    tagName: "div",
    template: Templates.project,

    initialize: function() {
      this.render();
      this.listenTo(AppState, 'change:activeProject', this.render);
    },

    render: function() {
      this.$el.html(this.template(AppState.get('activeProject').toJSON() ) );
    },

  });

  return new ProjectLayoutView();
});