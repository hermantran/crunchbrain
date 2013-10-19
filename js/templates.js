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