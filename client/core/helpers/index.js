'use strict';

var social = require('./social'),
    registerBoundHelper = Ember.Handlebars.registerBoundHelper;

registerBoundHelper('link-external', require('./linkExternal'));
registerBoundHelper('capitalize', require('./capitalize'));
registerBoundHelper('truncate', require('./truncate'));
registerBoundHelper('tag', require('./tag'));
registerBoundHelper('date', require('./date'));
registerBoundHelper('timeago', require('./timeago'));
registerBoundHelper('parse', require('./parse'));
registerBoundHelper('share', social('share'));
registerBoundHelper('tweet', social('tweet'));
registerBoundHelper('like',  social('like'));