define([
  "underscore"
], function(_) {
  var Templates = {};

  Templates.box = [
    '<div class="col-lg-4 box-wrapper">',
      '<div class="box shadow">',
        'Some project',
      '</div>',
    '</div>'
  ];

  for (var tmpl in Templates) {
    if (Templates.hasOwnProperty(tmpl)) {
      Templates[tmpl] = _.template(Templates[tmpl].join('\n'));
    }
  }

  return Templates;
});