'use strict';

var capitalize = require('../../helpers/capitalize');

var PROMPT_REMOVE = 'Are you sure you want to remove the article "%@1" from the category "%@2"?';

module.exports = Ember.ObjectController.extend({
  isDetail: false,

  actions: {

    remove: function (category) {
      if(global.confirm(PROMPT_REMOVE.fmt(this.get('headline'), capitalize(category)))) {
        this.set('isRemoved', true);
      }
    },

    undo: function () {
      this.set('isRemoved', false);
    }

  }

});