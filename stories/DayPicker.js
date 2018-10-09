import React from 'react';
import { storiesOf } from '@storybook/react';
import format from 'date-fns/format';
import DayPicker from '../src/components/DayPicker';


import {
  VERTICAL_ORIENTATION,
  VERTICAL_SCROLLABLE,
} from '../src/constants';

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

storiesOf('DayPicker', module)
  .add('default', () => (
    <DayPicker />
  ))
  .add('with custom day size', () => (
    <DayPicker daySize={50} />
  ))
  .add('single month', () => (
    <DayPicker numberOfMonths={1} />
  ))
  .add('3 months', () => (
    <DayPicker numberOfMonths={3} />
  ))
  .add('vertical', () => (
    <DayPicker
      numberOfMonths={2}
      orientation={VERTICAL_ORIENTATION}
    />
  ))
  .add('vertically scrollable with 12 months', () => (
    <div
      style={{
        height: 568,
        width: 320,
      }}
    >
      <DayPicker
        numberOfMonths={12}
        orientation={VERTICAL_SCROLLABLE}
      />
    </div>
  ))
  .add('vertical with custom day size', () => (
    <DayPicker
      numberOfMonths={2}
      orientation={VERTICAL_ORIENTATION}
      daySize={50}
    />
  ))
  .add('vertical with custom height', () => (
    <DayPicker
      numberOfMonths={2}
      orientation={VERTICAL_ORIENTATION}
      verticalHeight={568}
    />
  ))
  .add('with custom arrows', () => (
    <DayPicker
      navPrev={<TestPrevIcon />}
      navNext={<TestNextIcon />}
    />
  ))
  .add('with custom details', () => (
    <DayPicker
      renderDayContents={day => (day.day() % 6 === 5 ? '😻' : format(day, 'd'))}
    />
  ))
  .add('vertical with fixed-width container', () => (
    <div style={{ width: '400px' }}>
      <DayPicker
        numberOfMonths={2}
        orientation={VERTICAL_ORIENTATION}
      />
    </div>
  ))
  .add('with info panel', () => (
    <DayPicker
      renderCalendarInfo={() => (
        <TestCustomInfoPanel />
      )}
    />
  ))
  .add('with custom week day format', () => (
    <DayPicker
      weekDayFormat="ddd"
    />
  ))
  .add('with no animation', () => (
    <DayPicker
      transitionDuration={0}
    />
  ))
  .add('noBorder', () => (
    <DayPicker noBorder />
  ));
