/**
 * @module
 * @author Pete Romano <pete.c.romano@gmail.com>
 */
'use strict';

var TWEET_KNOWN_CHARS = 15,
    TWEET_MAX_CHARS   = 140,
    TWEET_EXCESS      = 25;

var urlHost = App.get('config.socialUrl') || location.host;

function getURL(id) {
  return location.protocol + '//' + urlHost + '/b/' + id;
}

var buttons = {

      share: function(model) {
        return '<a href="https://www.facebook.com/sharer/sharer.php?u=%@1" class="hover share" onclick="window.open(this.href, \'_blank\', \'width=500,height=500,resizable=1\'); return false;"></a>'.fmt(
          encodeURIComponent(getURL(model.get('id')))
        ).htmlSafe();
      },

      tweet: function(model) {
        var title   = Ember.String.trim(model.get('title').replace(/^@(\w)/, '$1').replace(/\s@(\w)/g, ' $1')),
            length  = title.length + TWEET_KNOWN_CHARS;

        if(length > TWEET_MAX_CHARS) {
          title = Ember.String.trimRight(title.substr(0, title.length-(length-TWEET_MAX_CHARS)-TWEET_EXCESS).replace(/\s*(?:#|@)\w*$/, '')) + '...';
        }

        return '<a href="https://twitter.com/intent/tweet?via=Brabble&url=%@1&text=%@2" class="hover tweet" target="_blank"></a>'.fmt(
          encodeURIComponent(getURL(model.get('id'))),
          encodeURIComponent(title)
        ).htmlSafe();
      },

      like: function(model) {
        return '<div class="fb-like" data-href="%@1" data-width="150" data-layout="button_count" data-show-faces="false" data-send="false"></div>'.fmt(getURL(model.get('id'))).htmlSafe();
      }

    };

function socialize(type) {
  return function(model) {
    return buttons[type] ? buttons[type](model) : '';
  };
}

module.exports = socialize;