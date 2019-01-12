# react-dates-fns

> An easily internationalizable, accessible, mobile-friendly datepicker library for the web. (Using date-fns instead of moment)

![react-dates in action](https://raw.githubusercontent.com/airbnb/react-dates/master/react-dates-demo.gif)

For examples of the datepicker in action, go to http://airbnb.io/react-dates.

To use a locale:

Add date-fns supported languages to utils/getLocale.js

```
import enUS from 'date-fns/locale/en-US';
import ptBR from 'date-fns/locale/pt-BR';
import zhCN from 'date-fns/locale/zh-CN';

export default function getLocale(locale) {
  switch (locale) {
    case 'en-US':
      return enUS;
    case 'pt-BR':
      return ptBR;
    case 'zh-CN':
      return zhCN;
    default:
      return enUS;
  }
}
```


Pass the locale to component like this:

```
<DateRangePickerWrapper
    showClearDates
    startDatePlaceholderText="入住日期"
    endDatePlaceholderText="退房日期"
    monthFormat="yyyy[年]MMMM"
    phrases={{
        closeDatePicker: '关闭',
        clearDates: '清除日期',
    }}
    locale="zh-CN"
/>
```
