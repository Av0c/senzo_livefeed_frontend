import React from 'react';
import moment from 'moment';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import { selectPeriod } from 'actions/querysettings';
import PeriodButton from 'components/common/periodbutton';
import Strings from 'components/common/strings';
import TimePicker from 'components/common/timepicker'

class DateSelector extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      startdate: this.props.query.startdate,
      enddate: this.props.query.enddate,
      starthour: this.props.card.default.starthour,
      endhour: this.props.card.default.endhour,
      active: this.props.query.active,
      groupby: this.props.query.groupby,
      show: false,
      timePickerEnabled: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.dispatchPeriod = this.dispatchPeriod.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startdate != this.state.startdate || nextProps.enddate != this.state.enddate) {
      this.setState({
        startdate: nextProps.query.startdate,
        enddate: nextProps.query.enddate,
        starthour: nextProps.query.starthour || this.state.starthour,
        endhour: nextProps.query.endhour || this.state.endhour,
        active: nextProps.query.active,
        groupby: nextProps.query.groupby
      });
    }
  }

  showDatePickers() {
    this.setState({
      active: "Custom",
      show: !this.state.show
    });
  }

  handleClick(value) {
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
        startdate: moment().subtract(1, "weeks").add(1, "days").format('DD-MM-YYYY'),
        enddate: moment().format('DD-MM-YYYY'),
        groupby: 'day'
      }, () =>
          this.dispatchPeriod());
    }

    else if (value == "This month") {
      this.setState({
        startdate: moment().subtract(1, "months").add(1, "days").format('DD-MM-YYYY'),
        enddate: moment().format('DD-MM-YYYY'),
        groupby: 'day'
      }, () =>
          this.dispatchPeriod());
    }

    else if (value == "This year") {
      this.setState({
        startdate: moment().subtract(1, "years").add(1, "days").format('DD-MM-YYYY'),
        enddate: moment().format('DD-MM-YYYY'),
        groupby: 'day'
      }, () =>
          this.dispatchPeriod());
    }

  }

  dispatchPeriod() {
    this.props.dispatch(selectPeriod({
      startdate: this.state.startdate,
      enddate: this.state.enddate,
      starthour: this.state.timePickerEnabled ? this.state.starthour : null,
      endhour: this.state.timePickerEnabled ? this.state.endhour : null,
      groupby: this.state.groupby,
      active: this.state.active
    }));
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
    let title = "";
    if (this.state.timePickerEnabled) {
      title = "ON : custom hour range.";
    } else {
      title = "OFF : each location uses its own hour range specified in default settings."
    }

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
          {this.state.show && <div className="datepicker">
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
              <div style={{display:"flex"}}>
                <div>
                  <input type="checkbox" checked={this.state.timePickerEnabled} onChange={this.onToggleTimePicker.bind(this)} title={title}/>
                </div>
                <div style={{flex:1, opacity: (this.state.timePickerEnabled ? "1": "0.3")}}>
                  <TimePicker
                    nSegments={24}
                    values={[this.state.starthour, this.state.endhour+1]}
                    onChange={this.setRangehour.bind(this)}
                    disabled={!this.state.timePickerEnabled}
                  />
                </div>
              </div>
          </div>}
        </ul>
      </div>
    )
  }

  onToggleTimePicker(e) {
    this.setState({ timePickerEnabled: !this.state.timePickerEnabled }, () => this.dispatchPeriod());
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
    this.setState({ starthour: values[0], endhour: (values[1]==null) ? null : (values[1]-1) }, () =>
      self.dispatchPeriod()
    );
  }

}

function mapStateToProps(state) {
  return {
    query: state.querySettingsReducer,
    card: state.defaultSettingsReducer.card
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);