define([
	'backbone'
], function(Backbone) {
	'use strict';
	var ProfileModel = Backbone.Model.extend({
		defaults: {
      name: 'John Doe',
      awards: '',
      education: '',
      experience: '',
      groups: '',
      img: 'http://lorempixel.com/g/640/480/sports/',
      interests: '',
      location: '',
      position: '',
      project_img: '',
      skills: '',
      bio: 'I am a developer based out of Los Angeles, CA. I\'m always looking for new startup opprtunities and hackathons, especially in the tech sector.' 
    },

    initialize: function() {
     if (this.get('img') === null) {
      this.set('img', 'http://lorempixel.com/g/640/480/city/');
     }
     else if (this.get('bio') === null) {
      this.set('bio', 'I am a developer based out of Los Angeles, CA. I\'m always looking for new startup opprtunities and hackathons, especially in the tech sector.');
     }
    }
	});

	return ProfileModel;
});