define([
  'backbone',
  'models/project',
  'models/profile'
], function(Backbone, ProjectModel, ProfileModel) {
  'use strict';
  var Container = Backbone.Model.extend();

  var AppState = Backbone.Model.extend({
    defaults: {
      collections: new Container(),
      views: new Container(),
      activeProject: new ProjectModel(),
      activeProfile: new ProfileModel()
    }
  });

  return new AppState();
});