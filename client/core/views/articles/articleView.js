'use strict';

module.exports = Ember.View.extend({
  templateName: 'client/core/templates/articles/show',
  classNameBindings: ['isClicked'],
  isClicked: false,

  didInsertElement: function() {
    var self = this;

    function bindClickClass(clicked) {
      return function() {
        self.set('isClicked', clicked);
      };
    }

    this.$()
      .on('mousedown', bindClickClass(true))
      .on('mouseup', bindClickClass(false))
      .on('touchstart', bindClickClass(true))
      .on('touchend', bindClickClass(false));
  }
});