define([
  'backbone',
  'templates',
  'state',
], function(Backbone, Templates, AppState) {
  var ProfileLayoutView = Backbone.View.extend({
    tagName: "div",
    template: Templates.profile,

    initialize: function() {
      this.render();
      this.listenTo(AppState, 'change:activeProfile', this.render);
    },

    render: function() {
      this.$el.html(this.template(AppState.get('activeProfile').toJSON() ) );
    },

  });

  return new ProfileLayoutView();
});