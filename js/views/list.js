define([
	"backbone"
], function(Backbone) {
	'use strict';
	var listView = Backbone.View.extend({
		initialize: function(attrs) {
			this.el = attrs.el;
			this.subView = attrs.subView;
			this.listenTo(this.collection, 'add', this.addSubView);
		},

		addSubView: function(model) {
			var self = this;
			require([self.subView], function(SubView) {
				var subView = new SubView({ model: model });
				self.$el.append(subView.el);
			});
		}
	});

	return listView;
});
