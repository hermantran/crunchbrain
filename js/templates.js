define([
  "underscore"
], function(_) {
  var Templates = {};

  Templates.projects = [
      '<div class="row text-center content-bar">',
        '<a href="#">Featured Projects</a>',
        '<a href="#">Recent Projects</a>',
      '</div>',
      '<h4 class="text-center">Featured Projects</h4>',
      '<div class="row text-center featured-projects"></div>',
      '<h4 class="text-center">Recent Projects</h4>',
      '<div class="row text-center recent-projects"></div>',
  ];

  Templates.project = [
    '<h3 class="text-center title"> <b> <%= title %> </b> </h3>',
    '<div class="text-center">By team</div>',
    '<div class="row">',
      '<div class="col-lg-8">',
        '<b>Pitch</b>',
        '<div class="project-box">',
          '<p>Problem:</p>',
          '<p>Solution:</p>',
        '</div>',
        '<b>Project</b>',
        '<div class="project-box">',
          '<div class="text-center media"><img src="<%= img %>"></div>',
          '<p>Description:</p>',
          '<p>Technology:</p>',
        '</div>',
        '<b>Activity</b>',
        '<div class="project-box">',
          '<p>Current status:</p>',
          '<p>Next:</p>',
          '<p>Goal:</p>',
        '</div>',
      '</div>',
      '<div class="col-lg-4">',
        '<b>Needs</b>',
        '<div class="project-box">',
          '<ul>',
            '<li>Developers</li>',
            '<li>Designers</li>',
          '</ul>',
        '</div>',
        '<b>Latest</b>',
        '<div class="project-box">',
          'Created on October 18, 2013',
        '</div>',
      '</div>',
    '</div>'
  ];

  Templates.box = [
    '<div class="box shadow">',
      '<img src="<%= img %>" width="100%">',
      '<b><%= title %></b>',
      '<p><%= description %></p>',
    '</div>'
  ];

  for (var tmpl in Templates) {
    if (Templates.hasOwnProperty(tmpl)) {
      Templates[tmpl] = _.template(Templates[tmpl].join('\n'));
    }
  }

  return Templates;
});