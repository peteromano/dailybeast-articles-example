/**
 * @module
 * @author Pete Romano <pete.c.romano@gmail.com>
 */
'use strict';

module.exports = function(text, beginning) {
  return text.replace(beginning ? /^[a-z]/gi : /(?:\s|^)[a-z]/gi, function($1) {
    return $1.toUpperCase();
  });
};