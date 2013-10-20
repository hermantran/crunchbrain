define([
  "backbone",
  "templates",
  "state",
], function(Backbone, Templates, AppState) {
  var SignupLayoutView = Backbone.View.extend({
    tagName: "div",
    className: "row",
    template: Templates.signup,

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template());
    }

  });

  return new SignupLayoutView();
});