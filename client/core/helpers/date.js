/**
 * @module
 * @author Pete Romano <pete.c.romano@gmail.com>
 */
'use strict';

module.exports = function(timestamp) {
  return new Date(timestamp).toDateString();
};