import { expect } from 'chai';

import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import format from 'date-fns/format';

import getSelectedDateOffset from '../../src/utils/getSelectedDateOffset';

const today = new Date();

describe('#getSelectedDateOffset', () => {
  it('returns a function modified Date object', () => {
    const fn = (day) => addDays(day, 2);
    const modifiedDay = getSelectedDateOffset(fn, today);
    expect(format(modifiedDay, 'Pp')).to.equal(format(addDays(today, 2), 'Pp'));
  });

  it('returns the passed day when function is undefined', () => {
    const modifiedDay = getSelectedDateOffset(undefined, today);
    expect(format(modifiedDay, 'Pp')).to.equal(format(today, 'Pp'));
  });

  it('modifies the returned day using the modifier callback', () => {
    const fn = (day) => addDays(day, 2);
    const modifier = (day) => subDays(day, 2);
    const modifiedDay = getSelectedDateOffset(fn, today, modifier);
    expect(format(modifiedDay, 'Pp')).to.equal(format(today, 'Pp'));
  });

  it('does not apply the modifier if function is undefined', () => {
    const modifier = (day) => subDays(day, 2);
    const modifiedDay = getSelectedDateOffset(undefined, today, modifier);
    expect(format(modifiedDay, 'Pp')).to.equal(format(today, 'Pp'));
  });
});
