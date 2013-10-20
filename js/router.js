define([
  'backbone',
  'state'
], function(Backbone, AppState) {
  var Router = Backbone.Router.extend({
    routes: {
      'projects': 'projects',
      'project/*id': 'project',
      'login': 'login',
      'profiles': 'profiles'
    },

    projects: function() {
      AppState.set('activeView', AppState.get('views').get('projectsLayout'));
    },

    login: function() {
      AppState.set('activeView', AppState.get('views').get('loginLayout'));
    },

    project: function(id) { 
      
    },

    profiles: function() {
      AppState.set('activeView', AppState.get('views').get('profilesLayout'));
    }
  }); 
 
  return new Router();
});