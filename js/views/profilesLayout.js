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
      var self = this,
          recentProfilesCollection = new ProfilesCollection();

      this.$el.html(this.template());

      AppState.get('collections').set('recentProfiles', recentProfilesCollection);

      this.recentProfiles = new ListView({
        el: this.$el.find('.recent-profiles'),
        subView: 'views/profile',
        collection: AppState.get('collections').get('recentProfiles')
      });
    }

  });

  return new ProfilesLayoutView();
});