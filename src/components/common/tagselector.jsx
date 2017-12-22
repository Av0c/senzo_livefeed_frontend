import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';

export default class TagSelector extends React.Component {

  optionClicked(tag) {
    this.props.chooseTag(tag);
  }

  render() {
    let show = this.props.roomType=='open_area';
    return (
      <Dropdown header={this.props.tag} toggleable>
        {show || <div><DropdownItem>
          <div onClick={this.optionClicked.bind(this, "Occupancy")}>
            {config.tag.OCCUPANCY.type}
          </div>
        </DropdownItem>
          <DropdownItem>
            <div onClick={this.optionClicked.bind(this, "Efficiency")}>
              {config.tag.EFFICIENCY.type}
            </div>
          </DropdownItem>
        </div>}
      </Dropdown>
    )
  }
}


