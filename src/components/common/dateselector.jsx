import React from 'react';
import moment from 'moment';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { connect } from 'react-redux';
import { selectPeriod } from 'actions/querysettings';
import PeriodButton from 'components/common/periodbutton';
import Strings from 'components/common/strings';
import TimePicker from 'components/common/timepicker'
class DateSelector extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      startdate: this.props.startdate,
      enddate: this.props.enddate,
      starthour: this.props.starthour,
      endhour: this.props.endhour,
      active: this.props.active,
      groupby: this.props.groupby,
      show: true,
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
        startdate: moment().format('DD-MM-YYYY'),
        enddate: moment().format('DD-MM-YYYY'),
        groupby: 'hour'
      }, () =>
          this.dispatchPeriod());
    }

    else if (value == "This week") {
      this.setState({
        enddate: moment().format('DD-MM-YYYY'),
        startdate: moment().subtract(1, "weeks").add(1, "days").format('DD-MM-YYYY'),
        groupby: 'day'
      }, () =>
          this.dispatchPeriod());
    }

    else if (value == "This month") {
      this.setState({
        enddate: moment().format('DD-MM-YYYY'),
        startdate: moment().subtract(1, "months").add(1, "days").format('DD-MM-YYYY'),
        groupby: 'day'
      }, () =>
          this.dispatchPeriod());
    }

    else if (value == "This year") {
      this.setState({
        enddate: moment().format('DD-MM-YYYY'),
        startdate: moment().subtract(1, "years").add(1, "days").format('DD-MM-YYYY'),
        groupby: 'day'
      }, () =>
          this.dispatchPeriod());
    }

  }

  dispatchPeriod() {
    this.props.dispatch(selectPeriod({
      startdate: this.state.startdate,
      enddate: this.state.enddate,
      starthour: this.state.starthour,
      endhour: this.state.endhour,
      groupby: this.state.groupby,
      active: this.state.active
    }));
  }

  componentWillMount() {
    let nextProps = this.props;
    if (nextProps.startdate != this.state.startdate && nextProps.enddate != this.state.enddate) {
      this.setState({
        startdate: nextProps.startdate,
        enddate: nextProps.enddate,
        starthour: nextProps.starthour,
        endhour: nextProps.endhour,
        active: nextProps.active,
        groupby: nextProps.groupby
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startdate != this.state.startdate || nextProps.enddate != this.state.enddate) {
      this.setState({
        startdate: nextProps.startdate,
        enddate: nextProps.enddate,
        starthour: nextProps.starthour,
        endhour: nextProps.endhour,
        active: nextProps.active,
        groupby: nextProps.groupby
      });
    }
  }

  onFormatDate(date) {
    let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    let d = day + '-' + month + '-' + date.getFullYear();
    return d;
  }

  onParseDateFromString(value) {
    if (typeof value == 'string') {
      let values = (value || '').split('-');
      let day = Math.max(1, Math.min(31, parseInt(values[0], 10)));
      let month = Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1;
      let year = parseInt(values[2], 10);
      if (year < 100) {
        year += date.getFullYear();
      }
      return new Date(year, month, day);
    }
    else {
      return value;
    }
  }

  render() {
    let from = this.onParseDateFromString(this.state.startdate);
    let to = this.onParseDateFromString(this.state.enddate);
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
          {this.state.show || <div className="datepicker">
            <div className="clearfix">
              <div className="pull-left">
                <DatePicker className="start-date"
                  formatDate={(date) => this.onFormatDate(date)}
                  onSelectDate={this.setStartDate.bind(this)}
                  value={from}
                  firstDayOfWeek={DayOfWeek.Monday}
                  strings={Strings}
                />
                  {/*parseDateFromString={this.onParseDateFromString}*/}
              </div>
              <div className="date-divider pull-left">-</div>
              <div className="pull-right">
                <DatePicker className="end-date"
                  formatDate={(date) => this.onFormatDate(date)}
                  onSelectDate={this.setEndDate.bind(this)}
                  value={to}
                  firstDayOfWeek={DayOfWeek.Monday}
                  strings={Strings}
                />
              </div>
            </div>
            <TimePicker
              nSegments={24}
              values={[this.state.starthour, this.state.endhour]}
              onChange={this.setRangehour.bind(this)}
            />
          </div>}
        </ul>
      </div>
    )
  }

  // Set state is asynchronous, apply update in callback where state is properly updated.
  setStartDate(date) {
    let d = this.onFormatDate(date);
    let self = this;
    this.setState({ startdate: d, groupby: 'day' }, () =>
      self.dispatchPeriod()
    );
  }

  setEndDate(date) {
    let d = this.onFormatDate(date);
    let self = this;
    this.setState({ enddate: d, groupby: 'day' }, () =>
      self.dispatchPeriod()
    );
  }

  setRangehour(values) {
    let self = this;
    this.setState({ starthour: values[0], endhour: values[1] }, () =>
      self.dispatchPeriod()
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
