import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux';
import { selectPeriod } from 'actions/querysettings';
import PeriodButton from 'components/common/periodbutton';
import TimePicker from 'components/common/timepicker'
class DateSelector extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        from: this.props.startdate,
        to: this.props.enddate,
        starthour: this.props.starthour,
        endhour: this.props.endhour,
        active: this.props.active,
        groupby: this.props.groupby
    }
    this.handleClick = this.handleClick.bind(this);
    this.dispatchPeriod = this.dispatchPeriod.bind(this);
  }

  showDatePickers() {
    this.setState({ active: "Custom" });
    this.setState({ show: !this.state.show });
  }

  handleClick(value) {
    console.log(this.setState.show);
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
        groupby: 'day'
      }, () =>
          this.dispatchPeriod());
    }

  }

  dispatchPeriod() {
    console.log(this.state);
    this.props.dispatch(selectPeriod({
      from: this.state.from,
      to: this.state.to,
      starthour: this.state.starthour,
      endhour: this.state.endhour,
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
        starthour: nextProps.starthour,
        endhour: nextProps.endhour,
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
        starthour: nextProps.starthour,
        endhour: nextProps.endhour,
        active: nextProps.active,
        groupby: nextProps.groupby
      });
    }
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

          {this.state.show || <div  className="datepicker">
            <div className="datepicker-body clearfix">
              <div className="start-date-datepicker pull-left">
                <DatePicker className="start-date pull-left"
                  dateFormat="DD-MM-YYYY"
                  selected={moment(this.state.from, 'DD-MM-YYYY')}
                  onChange={this.setStartDate.bind(this)}
                />
              </div>
              <div className="date-divider pull-left">-</div>
              <div className="end-date-datepicker pull-right">
                <DatePicker className="end-date pull-right"
                  dateFormat="DD-MM-YYYY"
                  selected={moment(this.state.to, 'DD-MM-YYYY')}
                  onChange={this.setEndDate.bind(this)}
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
  setStartDate(datestring) {
    let self = this;
    this.setState({ from: moment(datestring).format('DD-MM-YYYY'), groupby: 'day' }, () =>
      self.dispatchPeriod()
    );
  }

  setEndDate(datestring) {
    let self = this;
    this.setState({ to: moment(datestring).format('DD-MM-YYYY'), groupby: 'day' }, () =>
      self.dispatchPeriod()
    );
  }

  setRangehour(values) {
    let self = this;
    console.log(values);
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
