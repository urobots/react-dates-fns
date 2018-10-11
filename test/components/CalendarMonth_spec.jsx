import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import format from 'date-fns/format';

import CalendarMonth from '../../src/components/CalendarMonth';

describe('CalendarMonth', () => {
  describe('#render', () => {
    describe('data-visible attribute', () => {
      it('data-visible attribute is truthy if props.isVisible', () => {
        const wrapper = shallow(<CalendarMonth isVisible />).dive();
        expect(wrapper.prop('data-visible')).to.equal(true);
      });

      it('data-visible attribute is falsy if !props.isVisible', () => {
        const wrapper = shallow(<CalendarMonth isVisible={false} />).dive();
        expect(wrapper.prop('data-visible')).to.equal(false);
      });
    });

    describe('caption', () => {
      it('text is the correctly formatted month title', () => {
        const MONTH = new Date();
        const captionWrapper = shallow(<CalendarMonth month={MONTH} />).dive().find('strong');
        expect(captionWrapper.text()).to.equal(format(MONTH, 'MMMM yyyy'));
      });
    });
  });
});
