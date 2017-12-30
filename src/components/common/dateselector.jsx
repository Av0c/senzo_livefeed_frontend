import React from 'react';
import moment from 'moment';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { connect } from 'react-redux';
import { selectPeriod } from 'actions/querysettings';
import PeriodButton from 'components/common/periodbutton';
import Strings from 'components/common/strings';

class DateSelector extends React.Component {

  constructor() {
    super();
    this.state = {
      to: '',
      from: '',
      show: true,
      active: "",
      groupby: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.dispatchPeriod = this.dispatchPeriod.bind(this);
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
        to: moment().format('DD-MM-YYYY'),
        from: moment().subtract(1, "weeks").add(1, "days").format('DD-MM-YYYY'),
        groupby: 'day'
      }, () =>
          this.dispatchPeriod());
    }

    else if (value == "This month") {
      this.setState({
        to: moment().format('DD-MM-YYYY'),
        from: moment().subtract(1, "months").add(1, "days").format('DD-MM-YYYY'),
        groupby: 'day'
      }, () =>
          this.dispatchPeriod());
    }

    else if (value == "This year") {
      this.setState({
        to: moment().format('DD-MM-YYYY'),
        from: moment().subtract(1, "years").add(1, "days").format('DD-MM-YYYY'),
        groupby: 'month'
      }, () =>
          this.dispatchPeriod());
    }

  }

  dispatchPeriod() {
    this.props.dispatch(selectPeriod({
      from: this.state.from,
      to: this.state.to,
      groupby: this.state.groupby,
      active: this.state.active
    }));
  }

  componentWillMount() {
    let nextProps = this.props;
    if (nextProps.from != this.state.from && nextProps.to != this.state.to) {
      this.setState({
        from: nextProps.startdate,
        to: nextProps.enddate,
        active: nextProps.active,
        groupby: nextProps.groupby
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startdate != this.state.from && nextProps.enddate != this.state.to) {
      this.setState({
        from: nextProps.startdate,
        to: nextProps.enddate,
        active: nextProps.active,
        groupby: nextProps.groupby
      });
    }
  }

  onFormatDate(date) {
    let d = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() % 100;
    return d;
  }

  onParseDateFromString(value) {
    let date = this.state.value || new Date();
    let values = (value || '').trim().split('/');
    let day =
      values.length > 0
        ? Math.max(1, Math.min(31, parseInt(values[0], 10)))
        : date.getDate();
    let month =
      values.length > 1
        ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1
        : date.getMonth();
    let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
    if (year < 100) {
      year += date.getFullYear() - date.getFullYear() % 100;
    }
    return new Date(year, month, day);
  }

  render() {
    let from = this.onParseDateFromString(this.state.from);
    let to = this.onParseDateFromString(this.state.to);
    return (
      <div className="main-menu-time pull-right">
        <i className='ms-DatePicker-nextMonth'></i>
        <ul>
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="Today" />
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="This week" />
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="This month" />
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="This year" />
          <li onClick={this.showDatePickers.bind(this)} className="datepicker-parent">
            <a className={"button custom-time" + (this.state.active == "Custom" ? " active" : "")}>
              <span>Custom</span></a>
          </li>
          {this.state.show || <div style={{ width: '410px', marginRight: '50px', zIndex: 10006 }} className="datepicker">
            <div className="pull-left">
              <DatePicker className="start-date pull-left"
                formatDate={this.onFormatDate}
                onSelectDate={this.setStartDate.bind(this)}
                value={from}
                firstDayOfWeek={DayOfWeek.Monday}
                strings={Strings}
                parseDateFromString={this.onParseDateFromString}
              />
            </div>
            <div className="date-divider pull-left">-</div>
            <div className="pull-right" style={{ marginRight: '26px' }}>
              <DatePicker className="end-date pull-right"
                formatDate={this.onFormatDate}
                onSelectDate={this.setEndDate.bind(this)}
                value={to}
                firstDayOfWeek={DayOfWeek.Monday}
                strings={Strings}
                parseDateFromString={this.onParseDateFromString}
              />
            </div>
          </div>}
        </ul>
      </div>
    )
  }

  // Set state is asynchronous, apply update in callback where state is properly updated.
  setStartDate(datestring) {
    let self = this;
    this.setState({ from: moment(datestring).format('DD-MM-YYYY'), groupby: 'day' }, () =>
      self.dispatchPeriod()
    );
  }

  setEndDate(datestring) {
    let self = this;
    this.setState({ to: moment(datestring).format('DD-MM-YYYY'), groupby: 'day' }, () => {
      console.log(self.state);
      self.dispatchPeriod();
    }
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
