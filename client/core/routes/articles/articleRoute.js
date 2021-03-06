'use strict';

var Article = require('../../models/article');

Article.FIXTURES = require('../../data/fixtures/articles');

module.exports = Ember.Route.extend({

  model: function(params) {
    return Article.find(params.id);
  },

  setupController: function (controller, model) {
    controller
      .set("model", model)
      .set('isDetail', true);
  }

});