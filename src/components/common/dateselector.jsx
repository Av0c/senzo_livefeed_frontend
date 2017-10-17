import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import moment from 'moment';
import { DateField } from 'react-date-picker'
import {applyDates} from 'actions/querysettings';
import { connect } from 'react-redux';


class DateSelector extends React.Component {

  constructor() {
    super();
    this.state = {
      from: moment().subtract(1, 'days').format('YYYY-MM-DD'),
      to: moment().format('YYYY-MM-DD')
    }
  }

  render() {
    return (
      <Dropdown header="Date" customClass="datepicker">
        <DropdownItem>
          From:
          <DateField
          dateFormat="YYYY-MM-DD"
          defaultValue={this.state.from}
          onChange={this.setStartDate.bind(this)}
          />
        </DropdownItem>
        <DropdownItem>
          To:
          <DateField
            dateFormat="YYYY-MM-DD"
            defaultValue={this.state.to}
            onChange={this.setEndDate.bind(this)}
          />
        </DropdownItem>
      </Dropdown>
    )
  }

  // Set state is asynchronous, apply update in callback where state is properly updated.
  setStartDate(datestring) {
    this.setState({from: datestring}, () =>
      this.props.dispatch(applyDates(this.state))
    );

  }

  setEndDate(datestring) {
    this.setState({to: datestring}, () =>
      this.props.dispatch(applyDates(this.state))
    )
  }

}

function mapStateToProps(state){
  return state.querySettingsReducer
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
