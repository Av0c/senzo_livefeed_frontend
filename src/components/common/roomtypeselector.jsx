import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';
import { selectRoomType } from 'actions/querysettings';
import { connect } from 'react-redux';

export class RoomTypeSelector extends React.Component {

  optionClicked(room) {
    this.props.dispatch(selectRoomType(room));
  }

  render() {
    return (
      <Dropdown header={this.props.type} toggleable>
        <DropdownItem>
          <div onClick={this.optionClicked.bind(this, config.room.MEETINGROOM)}>
            {config.room.MEETINGROOM.type}
          </div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={this.optionClicked.bind(this, config.room.OPENAREA)}>
            {config.room.OPENAREA.type}
          </div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={this.optionClicked.bind(this, config.room.ALLAREA)}>
            {config.room.ALLAREA.type}
          </div>
        </DropdownItem>
      </Dropdown>
    )
  }
}

function mapStateToProps(state) {
  return state.querySettingsReducer.room
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomTypeSelector);
