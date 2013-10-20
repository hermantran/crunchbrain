define([
  'backbone',
  'state'
], function(Backbone, AppState) {
  var Router = Backbone.Router.extend({
    routes: {
      'projects': 'projects',
      'project/*id': 'project',
      'login': 'login',
      'profiles': 'profiles',
      'profile/*id': 'profile',
      'events': 'events',
      'signup': 'signup'
    },

    projects: function() {
      AppState.set('activeView', AppState.get('views').get('projectsLayout'));
    },

    login: function() {
      AppState.set('activeView', AppState.get('views').get('loginLayout'));
    },

    signup: function() {
      AppState.set('activeView', AppState.get('views').get('signupLayout'));
    },

    project: function(id) { 
      
    },

    profile: function(id) {

    },

    events: function() {
      AppState.set('activeView', AppState.get('views').get('eventsLayout'));
    },

    profiles: function() {
      AppState.set('activeView', AppState.get('views').get('profilesLayout'));
    }
  }); 
 
  return new Router();
});