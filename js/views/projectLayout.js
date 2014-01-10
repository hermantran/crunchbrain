define([
  'backbone',
  'templates',
  'state',
], function(Backbone, Templates, AppState) {
  var ProjectLayoutView = Backbone.View.extend({
    tagName: 'div',
    template: Templates.project,

    initialize: function() {
      this.render();
      this.listenTo(AppState, 'change:activeProject', this.render);
      this.$el
        .on('click', '.title', function() {
          if (!$(this).hasClass('edit')) {
            $(this).addClass('edit is-clickable').html('<input type="text" class="input-lg input-title" value="' + AppState.get('activeProject').get('title') + '"></input>');
          }
        })
        .on('keydown', '.input-title', function(e) {
          if (e.keyCode === 13) {
            AppState.get('activeProject').set('title', $(this).val());
            $(this).parent().removeClass('edit is-clickable').html(AppState.get('activeProject').get('title'));
          }
        })
        .on('click', '.pitch', function() {
          if (!$(this).hasClass('edit')) {
            $(this).addClass('edit is-clickable').html('<textarea style="width: 100%" rows="6" class="input-pitch">' + AppState.get('activeProject').get('pitch') + '</textarea>');
          }
        })
        .on('keydown', '.input-pitch', function(e) {
          if (e.keyCode === 13) {
            e.preventDefault();
            AppState.get('activeProject').set('pitch', $(this).val());
            $(this).parent().removeClass('edit is-clickable').html(AppState.get('activeProject').get('pitch'));
          }
        });
    },

    render: function() {
      this.$el.html(this.template(AppState.get('activeProject').toJSON() ) );
    },

  });

  return new ProjectLayoutView();
});