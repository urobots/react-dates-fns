import React from 'react';
import { storiesOf } from '@storybook/react';

import addMonths from 'date-fns/addMonths';
import addDays from 'date-fns/addDays';
import isInclusivelyBeforeDay from '../src/utils/isInclusivelyBeforeDay';
import isInclusivelyAfterDay from '../src/utils/isInclusivelyAfterDay';

import DateRangePickerWrapper from '../examples/DateRangePickerWrapper';


const TestCustomInputIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >
    C
  </span>
);

const TestCustomArrowIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >
    {'--->'}
  </span>
);

const TestCustomCloseIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >
'X'

  </span>
);

storiesOf('DRP - Input Props', module)
  .add('default', () => (
    <DateRangePickerWrapper
      initialStartDate={addMonths(new Date(), 3)}
      initialEndDate={addMonths(addDays(new Date(), 10), 3)}
    />
  ))
  .add('disabled', () => (
    <DateRangePickerWrapper
      initialStartDate={addMonths(new Date(), 3)}
      initialEndDate={addMonths(addDays(new Date(), 10), 3)}
      disabled
    />
  ))
  .add('disabled start date', () => (
    <DateRangePickerWrapper
      initialStartDate={addMonths(new Date(), 3)}
      initialEndDate={addMonths(addDays(new Date(), 10), 3)}
      disabled="startDate"
      isOutsideRange={day => !isInclusivelyAfterDay(day, addMonths(new Date(), 3))}
    />
  ))
  .add('disabled end date', () => (
    <DateRangePickerWrapper
      initialStartDate={addMonths(new Date(), 3)}
      initialEndDate={addMonths(addDays(new Date(), 10), 3)}
      disabled="endDate"
      isOutsideRange={day => !isInclusivelyAfterDay(day, new Date())
        || !isInclusivelyBeforeDay(day, addMonths(addDays(new Date(), 10), 3))}
    />
  ))
  .add('readOnly', () => (
    <DateRangePickerWrapper
      initialStartDate={addMonths(new Date(), 3)}
      initialEndDate={addMonths(addDays(new Date(), 10), 3)}
      readOnly
    />
  ))
  .add('with clear dates button', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showClearDates
    />
  ))
  .add('reopens DayPicker on clear dates', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showClearDates
      reopenPickerOnClearDates
    />
  ))
  .add('with custom display format', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      displayFormat="MMM D"
    />
  ))
  .add('with show calendar icon', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showDefaultInputIcon
    />
  ))
  .add('with custom show calendar icon', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      customInputIcon={<TestCustomInputIcon />}
    />
  ))
  .add('with custom arrow icon', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      customArrowIcon={<TestCustomArrowIcon />}
    />
  ))
  .add('with custom close icon', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showClearDates
      customCloseIcon={<TestCustomCloseIcon />}
    />
  ))
  .add('with show calendar icon after input', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showDefaultInputIcon
      inputIconPosition="after"
    />
  ))
  .add('with screen reader message', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      screenReaderInputMessage="Here you could inform screen reader users of the date format, minimum nights, blocked out dates, etc"
    />
  ))
  .add('noBorder', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      noBorder
    />
  ))
  .add('block styling', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showClearDates
      block
    />
  ))
  .add('small styling', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showClearDates
      small
    />
  ))
  .add('regular styling', () => (
    <DateRangePickerWrapper
      initialStartDate={addDays(new Date(), 3)}
      initialEndDate={addDays(new Date(), 10)}
      showClearDates
      regular
    />
  ));
