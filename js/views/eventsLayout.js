define([
  'backbone',
  'templates',
  'state',
  'views/list'
], function(Backbone, Templates, AppState, ListView) {
  var EventsLayoutView = Backbone.View.extend({
    tagName: "div",
    template: Templates.events,

    initialize: function() {
      this.render();
    },

    render: function() {
      var self = this;

      this.$el.html(this.template());
    }

  });

  return new EventsLayoutView();
});