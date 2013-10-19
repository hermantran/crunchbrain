define([
  'backbone',
  'state'
], function(Backbone, AppState) {
  var Router = Backbone.Router.extend({
    routes: {
      'projects': 'projects',
      'project/*id': 'project'
    },

    projects: function() {
      AppState.set('activeView', AppState.get('views').get('projectsLayout'));
    },

    project: function(id) { 
      
    }
  }); 
 
  return new Router();
});