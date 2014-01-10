require.config({
  baseUrl: 'js/',
  paths: {
    jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min', 'libs/jquery.min'],
    backbone: ['//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min', 'libs/backbone-min'],
    underscore: ['//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min', 'libs/underscore-min']
  },
  
  shim: {
    underscore: {
      exports: '_'  
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  },

  // urlArgs: "bust=" + (new Date()).getTime()
});

require([
  'jquery',
  'backbone',
  'state',
  'router',
  'templates',
  'views/app',
  'views/projectsLayout',
  'views/projectLayout',
  'views/loginLayout',
  'views/profilesLayout',
  'views/profileLayout',
  'views/eventsLayout',
  'views/signupLayout'
], function($, Backbone, AppState, Router, Templates, AppView, ProjectsLayoutView, ProjectLayoutView, LoginLayoutView, ProfilesLayoutView, ProfileLayoutView, EventsLayoutView, SignupLayoutView) {
  'use strict';
  Parse.initialize("icwRmnkVdAO6TZ1hxrL0CYSWhbHKWwsEjSunZO4e", "GmJWDRSthdUuzY1AZg948geBBBRCbRDzHQDsCOuV");

   var Project = Parse.Object.extend('project'),
      Team = Parse.Object.extend('profile'),
      query = new Parse.Query(Project),
      teamQ = new Parse.Query(Team);

  query
    .find()
    .then(function(results) {
      for (var i = 0; i < results.length; i++) {
        if (results[i].attributes.featured) {
          AppState.get('collections').get('featuredProjects').add(results[i].attributes);
        } else {
          AppState.get('collections').get('recentProjects').add(results[i].attributes);
        }
      }
    });

 teamQ
    .find()
    .then(function(results) {
      AppState.get('collections').get('recentProfiles').add(results[0].attributes);
    });

  var $content = $('#content'),
      views = AppState.get('views');

  views.set('projectsLayout', ProjectsLayoutView);
  views.set('projectLayout', ProjectLayoutView);
  views.set('loginLayout', LoginLayoutView);
  views.set('profilesLayout', ProfilesLayoutView);
  views.set('profileLayout', ProfileLayoutView);
  views.set('eventsLayout', EventsLayoutView);
  views.set('signupLayout', SignupLayoutView);

  $content
    .append(ProjectsLayoutView.el)
    .append(ProjectLayoutView.el)
    .append(LoginLayoutView.el)
    .append(SignupLayoutView.el)
    .append(ProfilesLayoutView.el)
    .append(ProfileLayoutView.el)
    .append(EventsLayoutView.el);

  var devWeek = Templates.eventBox({
    'title': "Developer Week LA",
    'img': 'img/dev.png',
    'date': 'October 18-21, 2013',
    'description': 'Developer Week LA invites 400+ developers to converge on SantaMonica for a 2-day hackathon, full-day developer conference and a week-long series of events.'
  });

  var startup = Templates.eventBox({
    'title': "Startup Weekend",
    'img': 'img/s.png',
    'date': 'November 22, 2013',
    'description': 'Startup Weekend is a global grassroots movement of active and empowered entrepreneurs who are learning the basics of founding startups and launching successful ventures.'
  });

  var a = Templates.eventBox({
    'title': "AngelHack",
    'img': 'img/a.png',
    'date': 'November 30, 2013',
    'description': 'AngelHack is a premier developer marketing agency, which offers comprehensive marketing programs to enhance existing corporate initiatives around developer relations, developer marketing, startup outreach, and the creation of developer ecosystems. '
  });

  EventsLayoutView.$el.find('.featured-events')
    .append(devWeek)
    .append(startup)
    .append(a)
    .on('click', '.box', function() {
      var index = $('.box').index(this),
          url;
      if (index === 1) {
        url = 'http://la.developerweek.com/';
      }
      else if (index === 2) {
        url = 'http://startupweekend.org/';
      }
      else {
        url = 'http://angelhack.com/';
      }
      window.open(url);
    });

  AppState.set('activeView', ProjectsLayoutView);
  Backbone.history.start();
});