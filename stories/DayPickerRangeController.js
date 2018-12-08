import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import addWeeks from 'date-fns/addWeeks';
import addMonths from 'date-fns/addMonths';
import getDay from 'date-fns/getDay';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';

import InfoPanelDecorator, { monospace } from './InfoPanelDecorator';

import isInclusivelyAfterDay from '../src/utils/isInclusivelyAfterDay';
import getMonths from '../src/utils/getMonths';

import { VERTICAL_ORIENTATION, VERTICAL_SCROLLABLE } from '../src/constants';

import DayPickerRangeControllerWrapper from '../examples/DayPickerRangeControllerWrapper';


const dayPickerRangeControllerInfo = `The ${monospace('DayPickerRangeController')} component is a
  fully controlled version of the ${monospace('DayPicker')} that has built-in rules for selecting a
  date range. Unlike the ${monospace('DayPicker')}, which requires the consumer to explicitly define
  ${monospace('onDayMouseEnter')}, ${monospace('onDayMouseLeave')}, and ${monospace('onDayClick')}
  handlers, the consumer needs simply to maintain the ${monospace('focusedInput')},
  ${monospace('startDate')}, and ${monospace('endDate')} values in state and then pass these down as
  props along with ${monospace('onFocusChange')} and ${monospace('onDatesChange')} callbacks that
  update them appropriately. You can see an example of this implementation <a href=
  "https://github.com/airbnb/react-dates/blob/master/examples/DayPickerRangeControllerWrapper.jsx">
  here</a>. <br/><br/>
  Note that the ${monospace('focusedInput')} prop may be ${monospace('null')}, but if this is the
  case, dates are not selectable. As a result, in the example wrapper, we always force
  ${monospace('focusedInput')} to be truthy in the ${monospace('onFocusChange')} method. <br/><br/>
  The ${monospace('DayPickerRangeController')} is particularly useful if you are interested in the
  ${monospace('DateRangePicker')} functionality and calendar presentation, but would like to
  implement your own inputs.`;

const TestPrevIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >
    Prev
  </span>
);

const TestNextIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >
    Next
  </span>
);

const TestCustomInfoPanel = () => (
  <div
    style={{
      padding: '10px 21px',
      borderTop: '1px solid #dce0e0',
      color: '#484848',
    }}
  >
    &#x2755; Some useful info here
  </div>
);

const datesList = [
  new Date(),
  addDays(new Date(), 1),
  addDays(new Date(), 3),
  addDays(new Date(), 9),
  addDays(new Date(), 10),
  addDays(new Date(), 11),
  addDays(new Date(), 13),
];

storiesOf('DayPickerRangeController', module)
  .addDecorator(InfoPanelDecorator(dayPickerRangeControllerInfo))
  .add('default', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
    />
  )))
  .add('with 7 days range selection', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      startDateOffset={day => subDays(day, 3)}
      endDateOffset={day => subDays(day, 3)}
    />
  )))
  .add('with 45 days range selection', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      startDateOffset={day => subDays(day, 22)}
      endDateOffset={day => addDays(day, 22)}
    />
  )))
  .add('with 4 days after today range selection', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      endDateOffset={day => day.add(4, 'days')}
    />
  )))
  .add('with current week range selection', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      startDateOffset={day => startOfWeek(day)}
      endDateOffset={day => endOfWeek(day)}
    />
  )))
  .add('with custom inputs', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      showInputs
    />
  )))
  .add('non-english locale', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      monthFormat="yyyy[年]MMMM"
      locale="zh-CN"
    />
  )))
  .add('single month', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      numberOfMonths={1}
    />
  )))
  .add('single month, custom caption', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerSingleDateController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerSingleDateController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerSingleDateController::onNextMonthClick')}
      numberOfMonths={1}
      renderMonthElement={({ month, onMonthSelect, onYearSelect }) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <select
              value={getMonth(month)}
              onChange={(e) => { onMonthSelect(month, e.target.value); }}
            >
              {getMonths().map((label, value) => (
                <option key={label} value={value}>{label}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={getYear(month)}
              onChange={(e) => { onYearSelect(month, e.target.value); }}
            >
              <option value={getYear(new Date()) - 1}>Last year</option>
              <option value={getYear(new Date())}>{getYear(new Date())}</option>
              <option value={getYear(new Date()) + 1}>Next year</option>
            </select>
          </div>
        </div>
      )}
    />
  )))
  .add('3 months', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      numberOfMonths={3}
    />
  )))
  .add('vertical', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      orientation={VERTICAL_ORIENTATION}
    />
  )))
  .add('vertical scrollable', withInfo()(() => (
    <div style={{ height: 500 }}>
      <DayPickerRangeControllerWrapper
        onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
        onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
        onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
        orientation={VERTICAL_SCROLLABLE}
        numberOfMonths={6}
        verticalHeight={800}
      />
    </div>
  )))
  .add('vertical scrollable with custom month nav', withInfo()(() => (
    <div style={{ height: 500 }}>
      <DayPickerRangeControllerWrapper
        onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
        onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
        onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
        orientation={VERTICAL_SCROLLABLE}
        numberOfMonths={3}
        verticalHeight={300}
        navNext={(
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                bottom: 20,
                left: 50,
                fontSize: 24,
                border: '1px solid gray',
                width: 200,
                padding: 10,
              }}
            >
              Show More Months
            </span>
          </div>
        )}
      />
    </div>
  )))
  .add('with custom month navigation', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      navPrev={<TestPrevIcon />}
      navNext={<TestNextIcon />}
    />
  )))
  .add('with custom month navigation and blocked navigation (minDate and maxDate)', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      minDate={new Date('2018-07-01')}
      maxDate={new Date('2018-10-20')}
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      navPrev={<TestPrevIcon />}
      navNext={<TestNextIcon />}
    />
  )))
  .add('with outside days enabled', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      numberOfMonths={1}
      enableOutsideDays
    />
  )))
  .add('with month specified on open', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      initialVisibleMonth={() => addMonths(new Date(), 10)}
    />
  )))
  .add('with minimum nights set', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      minimumNights={3}
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      initialStartDate={addDays(new Date(), 3)}
      autoFocusEndDate
    />
  )))
  .add('allows single day range', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      minimumNights={0}
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      initialStartDate={addDays(new Date(), 3)}
      autoFocusEndDate
    />
  )))
  .add('allows all days, including past days', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      isOutsideRange={() => false}
    />
  )))
  .add('allows next two weeks only', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      isOutsideRange={day => !isInclusivelyAfterDay(day, new Date())
        || isInclusivelyAfterDay(day, addWeeks(new Date(), 2))
      }
    />
  )))
  .add('with some blocked dates', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
    />
  )))
  .add('with some highlighted dates', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      isDayHighlighted={day1 => datesList.some(day2 => isSameDay(day1, day2))}
    />
  )))
  .add('blocks fridays', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      isDayBlocked={day => getDay(day) === 5}
    />
  )))
  .add('with navigation blocked (minDate and maxDate)', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      minDate={new Date('2018-07-01')}
      maxDate={new Date('2018-10-20')}
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
    />
  )))
  .add('with custom daily details', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      renderDayContents={day => format(day, 'ddd')}
    />
  )))
  .add('with info panel', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
    />
  )))
  .add('with no animation', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      transitionDuration={0}
    />
  )))
  .add('with vertical spacing applied', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
      onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
      verticalBorderSpacing={16}
    />
  )))
  .add('with custom horizontal month spacing applied', withInfo()(() => (
    <div style={{ height: 500 }}>
      <DayPickerRangeControllerWrapper
        onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
        onPrevMonthClick={action('DayPickerRangeController::onPrevMonthClick')}
        onNextMonthClick={action('DayPickerRangeController::onNextMonthClick')}
        orientation={VERTICAL_SCROLLABLE}
        numberOfMonths={6}
        verticalHeight={800}
        horizontalMonthPadding={0}
      />
    </div>
  )))
  .add('with no nav buttons', withInfo()(() => (
    <DayPickerRangeControllerWrapper
      onOutsideClick={action('DayPickerRangeController::onOutsideClick')}
      noNavButtons
    />
  )));
