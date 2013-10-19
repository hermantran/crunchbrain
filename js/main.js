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
  'state',
  'views/projectsLayout'
], function($, AppState, ProjectsLayoutView) {
  'use strict';
  var $content = $('#content');

  $content
    .append(ProjectsLayoutView.el);

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
});

