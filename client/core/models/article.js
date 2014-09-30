'use strict';

module.exports = RL.Model.extend({
  id:           RL.attr('string'),
  category:     RL.attr('string'),
  tags:         RL.attr('array'),
  date:         RL.attr('date'),
  photoUrl:     RL.attr('string'),
  headline:     RL.attr('string'),
  description:  RL.attr('string'),
  isRemoved:    RL.attr('boolean')
});