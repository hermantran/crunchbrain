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
  'templates'
], function($, Templates) {
  'use strict';
  var $recentProjects = $('#recent-projects'),
      $featuredProjects = $('#featured-projects');

  for (var i = 0; i < 3; i++) {
    $recentProjects.append(Templates.box);
    $featuredProjects.append(Templates.box);
  }
});

