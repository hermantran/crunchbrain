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
  'views/app',
  'views/projectsLayout',
  'views/projectLayout',
  'views/loginLayout',
  'views/profilesLayout'
], function($, Backbone, AppState, Router, AppView, ProjectsLayoutView, ProjectLayoutView, LoginLayoutView, ProfilesLayoutView) {
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

  var profiles = client.getTable("user").read().done(function(results) {
    console.log(results);
  }, function(err) {

  });


  Backbone.history.start();

  var $content = $('#content'),
      views = AppState.get('views');

  views.set('projectsLayout', ProjectsLayoutView);
  views.set('projectLayout', ProjectLayoutView);
  views.set('loginLayout', LoginLayoutView);
  views.set('profilesLayout', ProfilesLayoutView);

  $content
    .append(ProjectsLayoutView.el)
    .append(ProjectLayoutView.el)
    .append(LoginLayoutView.el)
    .append(ProfilesLayoutView.el);

  AppState.set('activeView', ProjectsLayoutView);
/*
  AppState.get('collections').get('recentProjects').add([
    { title: 'hello', description: 'lorem ipsum' },
    { title: 'hello2', description: 'lorem ipsum' },
    { title: 'hello3', description: 'lorem ipsum' },
    { title: 'another', description: 'lorem ipsum' },
    { title: 'project', description: 'lorem ipsum' }
  ]);

  AppState.get('collections').get('featuredProjects').add([
    { title: 'some', description: 'lorem ipsum' },
    { title: 'featured', description: 'lorem ipsum' },
    { title: 'project', description: 'lorem ipsum' }
  ]);
*/
});

