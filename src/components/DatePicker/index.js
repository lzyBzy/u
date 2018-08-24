import * as React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

type State = {
  startdate: any,
  endDate: any
};

class DatePicker extends React.Component<{}, State> {
  state= {
    startDate: null,
    endDate: null,
    focusedInput: null,
  }

  render() {
    return (
      <DateRangePicker
        showDefaultInputIcon
        small
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInputParam => this.setState({ focusedInput: focusedInputParam })} // PropTypes.func.isRequired,
      />);
  }
}

export default DatePicker;
