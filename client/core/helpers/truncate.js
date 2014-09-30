/**
 * @module
 * @author Pete Romano <pete.c.romano@gmail.com>
 */
'use strict';

var MAX_CHARS = 50;

var parse = require('./parse');

module.exports = function(text, max) {
  return parse(text.substring(0, max || MAX_CHARS) + '...');
};