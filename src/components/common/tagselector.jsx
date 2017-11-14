import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';
import { selectTag } from 'actions/querysettings';
import { connect } from 'react-redux';


export class TagSelector extends React.Component {

  optionClicked(tag) {
    this.props.dispatch(selectTag(tag));
  }

  render() {
    return (
      <Dropdown header={this.props.tag} toggleable>
        <DropdownItem>
          <div onClick={this.optionClicked.bind(this, "Occupancy")}>
            {config.tag.OCCUPANCY.type}
          </div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={this.optionClicked.bind(this, "Efficiency")}>
            {config.tag.EFFICIENCY.type}
          </div>
        </DropdownItem>
      </Dropdown>
    )
  }


}

function mapStateToProps(state) {
  return { tag: state.querySettingsReducer.tag }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagSelector);

