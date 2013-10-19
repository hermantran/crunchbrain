define([
  "backbone",
  "templates",
  "state",
  "collections/projects",
  "views/list"
], function(Backbone, Templates, AppState, ProjectsCollection, ListView) {
  var ProjectsLayoutView = Backbone.View.extend({
    tagName: "div",
    template: Templates.projects,

    initialize: function() {
      this.render();
    },

    render: function() {
      var self = this,
          recentProjectsCollection = new ProjectsCollection(),
          featuredProjectsCollection = new ProjectsCollection();

      this.$el.html(this.template());

      AppState.get('collections').set('recentProjects', recentProjectsCollection);
      AppState.get('collections').set('featuredProjects', featuredProjectsCollection);

      this.featuredProjects = new ListView({
        el: self.$el.find('.featured-projects'),
        subView: 'views/project',
        collection: AppState.get('collections').get('featuredProjects')
      });

      this.recentProjects = new ListView({
        el: this.$el.find('.recent-projects'),
        subView: 'views/project',
        collection: AppState.get('collections').get('recentProjects')
      });
    },

  });

  return new ProjectsLayoutView();
});