import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';
import { selectRoomType } from 'actions/querysettings';
import { connect } from 'react-redux';

export default class RoomTypeSelector extends React.Component {

    optionClicked(room) {
        this.props.chooseType(room);
    }

    render() {
        let show = (this.props.roomType == 'open_area' || this.props.roomType == 'meeting_room') && (this.props.type == 'Meeting rooms' || this.props.type == 'Open areas');
        return (
            <Dropdown header={this.props.type} toggleable>
                {show || <div><DropdownItem>
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
                </DropdownItem></div>}
            </Dropdown>
        )
    }
}
