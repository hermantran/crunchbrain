define([
  'backbone'
], function(Backbone) {
  'use strict';
  var ProjectModel = Backbone.Model.extend({
    defaults: {
      title: 'Default',
      team: 'team',
      description: 'Some description',
      pitch: '',
      status: '',
      technology: '',
      current_status: '',
      next: '',
      goal: '',
      img: (function() { return 'http://lorempixel.com/g/640/480/city/' + Math.floor(Math.random() * 10); })()
    },

    initialize: function() {
     if (this.get('img') === null) {
      this.set('img', 'http://lorempixel.com/g/640/480/city/');
     }
    }
  });

  return ProjectModel;
});