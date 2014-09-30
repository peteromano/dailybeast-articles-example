/**
 * @module
 * @author Pete Romano <pete.c.romano@gmail.com>
 */
'use strict';

var round = Math.round;

/**
 * @desc Convert a timestamp to an elapsed time string (1h, 34m, 2d, 14w, etc.)
 */
module.exports = function(timestamp) {
  var minutesAgo  = round((new Date()-timestamp)/60000),
      secondsAgo  = round(minutesAgo*60),
      hoursAgo    = round(minutesAgo/60),
      daysAgo     = round(hoursAgo/24),
      weeksAgo    = round(daysAgo/7);

  if(weeksAgo === -1) {
    return '0s';
  } else if(weeksAgo) {
    return weeksAgo + 'w';
  } else if(daysAgo) {
    return daysAgo + 'd';
  } else if(hoursAgo) {
    return hoursAgo + 'h';
  } else if(minutesAgo){
    return minutesAgo + 'm';
  } else {
    return secondsAgo + 's';
  }
};