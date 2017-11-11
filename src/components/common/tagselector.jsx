import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';
import { selectRoomType } from 'actions/querysettings';
import { connect } from 'react-redux';


export class TagSelector extends React.Component {

  optionClicked(tag) {
    console.log(tag);
  }

  render() {
    return (
      <Dropdown header={this.props.type} toggleable>
        <DropdownItem>
          <div onClick={this.optionClicked.bind(this, config.tag.OCCUPANCY.type)}>
            {config.tag.OCCUPANCY.type}
          </div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={this.optionClicked.bind(this, config.tag.EFFICIENCY.type)}>
            {config.tag.EFFICIENCY.type}
          </div>
        </DropdownItem>
      </Dropdown>
    )
  }

  
}

function mapStateToProps(state) {
    return state.querySettingsReducer.tag
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      dispatch
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TagSelector);

