define([
  'backbone',
  'templates',
  'state',
], function(Backbone, Templates, AppState) {
  var ProfileLayoutView = Backbone.View.extend({
    tagName: "div",
    template: Templates.profile,

    initialize: function() {
      this.render();
      this.listenTo(AppState, 'change:activeProfile', this.render);
      this.$el
        .on('click', '.bio', function() {
          if (!$(this).hasClass('edit')) {
            $(this).addClass('edit is-clickable').html('<textarea class="input-bio" style="width:100%" rows="6">' + AppState.get('activeProfile').get('bio') + '</textarea>');
          }
        })
        .on('keydown', '.input-bio', function(e) {
          console.log('key');
          if (e.keyCode === 13) {
            AppState.get('activeProfile').set('bio', $(this).val());
            $(this).parent().removeClass('edit is-clickable').html('<p>' + AppState.get('activeProfile').get('bio') + '</p>');
          }
        })
    },

    render: function() {
      this.$el.html(this.template(AppState.get('activeProfile').toJSON() ) );
    },

  });

  return new ProfileLayoutView();
});