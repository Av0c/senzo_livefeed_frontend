import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import moment from 'moment';
import { DateField } from 'react-date-picker'
import { applyDates } from 'actions/querysettings';
import { connect } from 'react-redux';
import DatePicker from 'react-bootstrap-date-picker';
import PeriodButton from 'components/common/periodbutton';


class DateSelector extends React.Component {

  constructor() {
    super();
    this.state = {
      from: moment().subtract(1, 'days').format('YYYY-MM-DD'),
      to: moment().format('YYYY-MM-DD'),
      show: true,
      active: "This week"
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
        from: moment().format('YYYY-MM-DD'),
        to: moment().format('YYYY-MM-DD')
      });
    }

    else if(value == "This week") {
      this.setState({
        from: moment().moment().startOf('week').format('YYYY-MM-DD'),
        to: moment().startOf('isoweek').format('YYYY-MM-DD')
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="main-menu-time pull-right">
        <ul>
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="Today" />
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="This week" />
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="This Month" />
          <PeriodButton handleClick={this.handleClick} active={this.state.active} value="This year" />
          <li onClick={this.showDatePickers.bind(this)} className="datepicker-parent">
            <a className={"button custom-time" + (this.state.active == "Custom" ? " active" : "")} href="#">
              <span>Custom</span></a>
          </li>
          {this.state.show || <div style={{ marginRight: '180px' }} className="datepicker">
            <DateField className="start-date pull-left"
              dateFormat="YYYY-MM-DD"
              defaultValue={this.state.from}
              onChange={this.setStartDate.bind(this)}
            />
            <div className="date-divider pull-left">-</div>
            <DateField className="end-date pull-left"
              dateFormat="YYYY-MM-DD"
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
    this.setState({ from: datestring }, () =>
      this.props.dispatch(applyDates(this.state))
    );
  }

  setEndDate(datestring) {
    this.setState({ to: datestring }, () =>
      this.props.dispatch(applyDates(this.state))
    )
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
