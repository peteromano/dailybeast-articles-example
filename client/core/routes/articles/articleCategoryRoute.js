'use strict';

var ArticleListRoute = require('./articleListRoute'),
    capitalize = require('../../helpers/capitalize');

module.exports = ArticleListRoute.extend({

  setupController: function(controller, model) {
    if(model.get('category')) {
      model = this.model({ category: model.get('category') });
    }

    controller.set('category', capitalize(this.params.category));

    return ArticleListRoute.prototype.setupController.call(this, controller, model);
  }

});