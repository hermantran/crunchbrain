define([
  "backbone",
  "templates",
  "state",
], function(Backbone, Templates, AppState) {
  var LoginLayoutView = Backbone.View.extend({
    tagName: "div",
    className: "row",
    template: Templates.login,

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template());
    }

  });

  return new LoginLayoutView();
});