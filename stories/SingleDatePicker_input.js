import React from 'react';
import { storiesOf } from '@storybook/react';

import addDays from 'date-fns/addDays';

import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';

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

storiesOf('SDP - Input Props', module)
  .add('default', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
    />
  ))
  .add('disabled', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      disabled
    />
  ))
  .add('readOnly', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      readOnly
    />
  ))
  .add('with clear dates button', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      showClearDate
    />
  ))
  .add('reopens DayPicker on clear dates', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      showClearDate
      reopenPickerOnClearDate
    />
  ))
  .add('with custom display format', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      displayFormat="MMM D"
    />
  ))
  .add('with show calendar icon', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      showDefaultInputIcon
    />
  ))
  .add('with custom show calendar icon', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      customInputIcon={<TestCustomInputIcon />}
    />
  ))
  .add('with show calendar icon after input', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      showDefaultInputIcon
      inputIconPosition="after"
    />
  ))
  .add('with screen reader message', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      screenReaderInputMessage="Here you could inform screen reader users of the date format, minimum nights, blocked out dates, etc"
    />
  ))
  .add('noBorder', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      noBorder
    />
  ))
  .add('block styling', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      showClearDate
      block
    />
  ))
  .add('small styling', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      showClearDate
      small
    />
  ))
  .add('regular styling', () => (
    <SingleDatePickerWrapper
      initialDate={addDays(new Date(), 3)}
      showClearDate
      regular
    />
  ));
