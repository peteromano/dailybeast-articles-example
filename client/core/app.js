'use strict';

var App = module.exports = global.App = Ember.Application.create();

require('./helpers');

App.Client = RL.Client.create({
  adapter: RL.FixtureAdapter.create()
});

if(global.history.pushState) {
  App.Router.reopen({ location: 'history' });
} else if(!location.hash) {
  global.location = [location.protocol, '//', location.host, location.search, '/#', location.pathname].join('');
}

App.Router.map(function() {
  // Route definitions
  this.route('article.category', { path: '/:category' });
  this.route('article', { path: '/article/:id' });
});

// Routes
App.IndexRoute = require('./routes/indexRoute');
App.ArticleRoute = require('./routes/articles/articleRoute');
App.ArticleCategoryRoute = require('./routes/articles/articleCategoryRoute');

// Controllers
App.ArticleController = require('./controllers/articles/articleController');
App.ArticleListController = require('./controllers/articles/articleListController');
App.ArticleCategoryController = require('./controllers/articles/articleCategoryController');

// Views
App.ApplicationView = require('./views/applicationView');
App.IndexView = require('./views/indexView');
App.ArticleView = require('./views/articles/articleView');
App.ArticleListView = require('./views/articles/articleListView');
App.ArticleCategoryView = require('./views/articles/articleCategoryView');