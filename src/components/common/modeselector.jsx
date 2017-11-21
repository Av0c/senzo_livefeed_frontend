import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';
import {selectMode} from 'actions/querysettings';
import { connect } from 'react-redux';


 export default class ModeSelector extends React.Component {

  optionClicked(mode) {
    this.props.chooseMode(mode);
  }
  
  render() {
    return (
      <Dropdown header={this.props.mode} toggleable>
        <DropdownItem>
          <div onClick={this.optionClicked.bind(this, config.mode.AVERAGE.code)}>
            {config.mode.AVERAGE.code}
          </div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={this.optionClicked.bind(this, config.mode.PEAK.code)}>
            {config.mode.PEAK.code}
          </div>
        </DropdownItem>
      </Dropdown>
    )
  }
}


