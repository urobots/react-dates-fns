import isDate from 'date-fns/isDate';
import isValid from 'date-fns/isValid';
import format from 'date-fns/format';

import { ISO_MONTH_FORMAT } from '../constants';

export default function toISOMonthString(date, currentFormat) {
  const newDate = new Date(date);
  const dateObj = isDate(newDate) ? newDate : format(newDate, currentFormat);
  if (!dateObj || !isValid(dateObj)) {
    return null;
  }

  return format(dateObj, ISO_MONTH_FORMAT);
}
