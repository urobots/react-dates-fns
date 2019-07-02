import isDate from 'date-fns/isDate';
import isValid from 'date-fns/isValid';
import format from 'date-fns/format';

import getLocale from './getLocale';

import { DISPLAY_FORMAT } from '../constants';

export default function toLocalizedDateString(date, currentFormat, locale) {
  if (!date) {
    return null;
  }
  const dateObj = isDate(date) ? date : format(date, currentFormat);
  if (!dateObj || !isValid(dateObj)) {
    return null;
  }
  return format(dateObj, DISPLAY_FORMAT, { locale: getLocale(locale) });
}
