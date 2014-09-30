/**
 * @module
 * @author Pete Romano <pete.c.romano@gmail.com>
 */
'use strict';

var MAX_URL_CHARS     = 34,
    URL_PATTERN       = '(https?:\/\/\\w+(?:\\.\\w+)+[^\\s]*)',
    HASHTAG_PATTERN   = '(#\\w+)',
    TRANSFORM_RE      = new RegExp([URL_PATTERN, HASHTAG_PATTERN].join('|'), 'gi'),
    HASHTAG_FORMAT    = '<a class="hashtag" href="/b/tags/%@2" data-brabble-tags="%@2">%@1</a>',
    URL_FORMAT        = '<a class="url" href="%@1" target="_blank">%@2</a>';

/**
 * @desc Parses text into clickable hashtags, mentions, links, etc.
 */
function parse(text) {
  if(!text) {
    return '';
  } else {
    text = text.replace(TRANSFORM_RE, function (match) {
        if(new RegExp(URL_PATTERN, 'gi').test(match)) {
          return URL_FORMAT.fmt(match, match);
        } else if(new RegExp(HASHTAG_PATTERN).test(match)) {
          return HASHTAG_FORMAT.fmt(match, encodeURIComponent(match.substring(1)));
        } else {
          return match;
        }
      })

      .replace(/>\s*[^\s]{30,}\s*</g, function(match) {
        return match.substring(0, MAX_URL_CHARS) + '...<';
      });
  }

  return text.htmlSafe();
}

module.exports = parse;