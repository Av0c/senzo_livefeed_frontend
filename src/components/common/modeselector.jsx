import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';
import {selectMode} from 'actions/querysettings';
import { connect } from 'react-redux';


class ModeSelector extends React.Component {

  optionClicked(mode) {
    this.props.dispatch(selectMode(mode))
  }
  
  render() {
    return (
      <Dropdown header={this.props.title} toggleable>
        <DropdownItem>
          <div onClick={this.optionClicked.bind(this, config.mode.AVERAGE)}>
            {config.mode.AVERAGE.title}
          </div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={this.optionClicked.bind(this, config.mode.PEAK)}>
            {config.mode.PEAK.title}
          </div>
        </DropdownItem>
      </Dropdown>
    )
  }
}

function mapStateToProps(state){
  return state.querySettingsReducer.mode
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModeSelector);

