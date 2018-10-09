import React from 'react';
import { storiesOf } from '@storybook/react';

import addDays from 'date-fns/addDays';
import addWeeks from 'date-fns/addWeeks';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';

import isInclusivelyAfterDay from '../src/utils/isInclusivelyAfterDay';

import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';

const datesList = [
  new Date(),
  addDays(new Date(), 1),
  addDays(new Date(), 3),
  addDays(new Date(), 9),
  addDays(new Date(), 10),
  addDays(new Date(), 11),
  addDays(new Date(), 12),
  addDays(new Date(), 13),
];

storiesOf('SDP - Day Props', module)
  .add('default', () => (
    <SingleDatePickerWrapper autoFocus />
  ))
  .add('allows all days, including past days', () => (
    <SingleDatePickerWrapper
      isOutsideRange={() => false}
      autoFocus
    />
  ))
  .add('allows next two weeks only', () => (
    <SingleDatePickerWrapper
      isOutsideRange={day => !isInclusivelyAfterDay(day, new Date())
        || isInclusivelyAfterDay(day, addWeeks(new Date(), 2))
      }
      autoFocus
    />
  ))
  .add('with some blocked dates', () => (
    <SingleDatePickerWrapper
      isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
      autoFocus
    />
  ))
  .add('with some highlighted dates', () => (
    <SingleDatePickerWrapper
      isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
      autoFocus
    />
  ))
  .add('blocks fridays', () => (
    <SingleDatePickerWrapper
      isDayBlocked={day => day.weekday() === 5}
      autoFocus
    />
  ))
  .add('with custom daily details', () => (
    <SingleDatePickerWrapper
      numberOfMonths={1}
      renderDayContents={day => format(day, 'ddd')}
      autoFocus
    />
  ));
