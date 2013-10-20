require.config({
  paths: {
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
    backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min'
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

  urlArgs: "bust=" + (new Date()).getTime()
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
  'views/eventsLayout'
], function($, Backbone, AppState, Router, Templates, AppView, ProjectsLayoutView, ProjectLayoutView, LoginLayoutView, ProfilesLayoutView, ProfileLayoutView, EventsLayoutView) {
  'use strict';
  var client = new WindowsAzure.MobileServiceClient(
      "https://hackathondata.azure-mobile.net/",
      "QnBfSOSWkwCVrZwuRCKGqAMXUzuFOb51"
  );

  var projects = client.getTable("project").read().done(function(results) {
    for (var i = 0; i < results.length; i++) {
      if (results[i].featured) {
        AppState.get('collections').get('featuredProjects').add(results[i]);
      } else {
        AppState.get('collections').get('recentProjects').add(results[i]);
      }
    }
  }, function(err) {
    console.log("error: " + err);
  });

  var profiles = client.getTable("team").read().done(function(results) {
     AppState.get('collections').get('recentProfiles').add(results);
     console.log(results);
  }, function(err) {

  });

  var $content = $('#content'),
      views = AppState.get('views');

  views.set('projectsLayout', ProjectsLayoutView);
  views.set('projectLayout', ProjectLayoutView);
  views.set('loginLayout', LoginLayoutView);
  views.set('profilesLayout', ProfilesLayoutView);
  views.set('profileLayout', ProfileLayoutView);
  views.set('eventsLayout', EventsLayoutView);

  $content
    .append(ProjectsLayoutView.el)
    .append(ProjectLayoutView.el)
    .append(LoginLayoutView.el)
    .append(ProfilesLayoutView.el)
    .append(ProfileLayoutView.el)
    .append(EventsLayoutView.el);

  var devWeek = Templates.eventBox({
    'title': "Developer Week LA",
    'img': 'img/dev.png',
    'date': 'October 18-21, 2013',
    'description': 'Developer Week LA invites 400+ developers to converge on SantaMonica for a 2-day hackathon, full-day developer conference and a week-long series of events.'
  });

  EventsLayoutView.$el.find('.featured-events')
    .append(devWeek)
    .on('click', '.box', function() {
      window.open('http://la.developerweek.com/');
    });


  AppState.set('activeView', ProjectsLayoutView);
  Backbone.history.start();
});