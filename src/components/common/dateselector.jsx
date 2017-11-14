import React from 'react';
import moment from 'moment';
import { DateField } from 'react-date-picker'
import { connect } from 'react-redux';

import { selectPeriod } from 'actions/querysettings';
import PeriodButton from 'components/common/periodbutton';


class DateSelector extends React.Component {

  constructor() {
    super();
    this.state = {
      from: moment().startOf('isoweek').format('DD-MM-YYYY'),
      to: moment().endOf('week').format('DD-MM-YYYY'),
      show: true,
      active: "This week",
      groupby: 'day'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  showDatePickers() {
    this.setState({ active: "Custom" });
    this.setState({ show: !this.state.show });
  }

  handleClick(value) {

    this.setState({ show: !this.setState.show });
    this.setState({ active: value });
    if (value == "Today") {
      this.setState({
        from: moment().format('DD-MM-YYYY'),
        to: moment().format('DD-MM-YYYY'),
        groupby: 'hour'
      }, () =>
          this.dispatchPeriod());
    }

    else if (value == "This week") {
      this.setState({
        to: moment().endOf('week').format('DD-MM-YYYY'),
        from: moment().startOf('isoweek').format('DD-MM-YYYY'),
        groupby: 'day'
      }, () =>
          this.dispatchPeriod());
    }

    else if (value == "This month") {
      this.setState({
        to: moment().endOf('month').format('DD-MM-YYYY'),
        from: moment().startOf('month').format('DD-MM-YYYY'),
        groupby: 'day'
      }, () =>
          this.dispatchPeriod());
    }

    else if (value == "This year") {
      this.setState({
        to: moment().endOf('year').format('DD-MM-YYYY'),
        from: moment().startOf('year').format('DD-MM-YYYY'),
        groupby: 'month'
      }, () =>
          this.dispatchPeriod());
    }

  }

  dispatchPeriod() {
    this.props.dispatch(selectPeriod({
      from: this.state.from,
      to: this.state.to,
      groupby: this.state.groupby
    }));
  }

  componentDidMount() {
    this.props.dispatch(selectPeriod({
      from: this.state.from,
      to: this.state.to,
      groupby: this.state.groupby
    }))
  }

  render() {
    return (
      <div className="main-menu-time pull-right">
        <ul>
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="Today" />
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="This week" />
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="This month" />
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="This year" />
          <li onClick={this.showDatePickers.bind(this)} className="datepicker-parent">
            <a className={"button custom-time" + (this.state.active == "Custom" ? " active" : "")}>
              <span>Custom</span></a>
          </li>
          {this.state.show || <div style={{ marginRight: '180px', zIndex: 10 }} className="datepicker">
            <DateField className="start-date pull-left"
              dateFormat="DD-MM-YYYY"
              defaultValue={this.state.from}
              onChange={this.setStartDate.bind(this)}
            />
            <div className="date-divider pull-left">-</div>
            <DateField className="end-date pull-left"
              dateFormat="DD-MM-YYYY"
              defaultValue={this.state.to}
              onChange={this.setEndDate.bind(this)}
            />
          </div>}

        </ul>

      </div>

    )
  }

  // Set state is asynchronous, apply update in callback where state is properly updated.
  setStartDate(datestring) {
    this.setState({ from: datestring, groupby: 'day' }, () =>
      this.dispatchPeriod()
    );
  }

  setEndDate(datestring) {
    this.setState({ to: datestring, groupby: 'day' }, () =>
      this.dispatchPeriod()
    );
  }

}

function mapStateToProps(state) {
  return state.querySettingsReducer
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
