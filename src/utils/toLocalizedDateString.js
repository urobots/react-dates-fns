import isDate from 'date-fns/isDate';
import isValid from 'date-fns/isValid';
import format from 'date-fns/format';

import { DISPLAY_FORMAT } from '../constants';

export default function toLocalizedDateString(date, currentFormat) {
  const dateObj = isDate(date) ? date : format(date, currentFormat);
  if (!dateObj || !isValid(dateObj)) {
    return null;
  }

  return format(dateObj, DISPLAY_FORMAT);
}
