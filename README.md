# react-dates-fns

> An easily internationalizable, accessible, mobile-friendly datepicker library for the web. (Using date-fns instead of moment)

![react-dates in action](https://raw.githubusercontent.com/airbnb/react-dates/master/react-dates-demo.gif)

For examples of the datepicker in action, go to http://airbnb.io/react-dates.

To use a locale, you need to pass one of the date-fns supported languages like this:

`<DateRangePickerWrapper
    showClearDates
    startDatePlaceholderText="入住日期"
    endDatePlaceholderText="退房日期"
    monthFormat="yyyy[年]MMMM"
    phrases={{
        closeDatePicker: '关闭',
        clearDates: '清除日期',
    }}
    locale="zh-CN"
/>`
