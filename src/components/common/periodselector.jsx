import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';
import {selectPeriod} from 'actions/querysettings';
import { connect } from 'react-redux';

class PeriodSelector extends React.Component {

  optionClicked(period) {
    this.props.dispatch(selectPeriod(period))
  }
  
  render() {
    return (
      <Dropdown header={this.props.code} toggleable>
          <DropdownItem>
            <div onClick={this.optionClicked.bind(this, config.time.period.DAY)}>
              {config.time.period.DAY.code}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.optionClicked.bind(this, config.time.period.WEEK)}>
              {config.time.period.WEEK.code}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.optionClicked.bind(this, config.time.period.MONTH)}>
              {config.time.period.MONTH.code}
            </div>
          </DropdownItem>
      </Dropdown>
    )
  }
}

function mapStateToProps(state){
  return state.querySettingsReducer.period
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeriodSelector);

