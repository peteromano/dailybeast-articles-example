/**
 * @module
 * @author Pete Romano <pete.c.romano@gmail.com>
 */
'use strict';

var NewTabLinkView = Ember.LinkView.extend({
  //attributeBindings: Ember.LinkView.prototype.attributeBindings.concat('target'),
  attributeBindings: ['href', 'title', 'target'],
  target: '_blank',
  _invoke: function() {
    return true;
  }
});

module.exports = function(name) {
  var options = [].slice.call(arguments, -1)[0],
      params = [].slice.call(arguments, 0, -1),
      hash = options.hash;

  hash.disabledBinding = hash.disabledWhen;

  hash.parameters = {
    context: this,
    options: options,
    params: params
  };

  //return Ember.Handlebars.helpers.view.call(this, $.browser.msie && $.browser.version <= 9 ? Ember.LinkView : NewTabLinkView, options);
  return Ember.Handlebars.helpers.view.call(this, NewTabLinkView, options);
};