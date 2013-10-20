define([
  "backbone",
  "templates",
  "state",
  "collections/profiles",
  "views/list"
], function(Backbone, Templates, AppState, ProfilesCollection, ListView) {
  var ProfilesLayoutView = Backbone.View.extend({
    tagName: "div",
    template: Templates.profiles,

    initialize: function() {
      this.render();
    },

    render: function() {
      var self = this;

      this.$el.html(this.template());
    }

  });

  return new ProfilesLayoutView();
});