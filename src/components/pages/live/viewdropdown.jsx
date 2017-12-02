import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';

import { connect } from 'react-redux';

export default class ViewFilterDropdown extends React.Component {
	optionClicked(node) {
		this.props.click(node);
	}

	render() {
		return (
			<Dropdown header={this.props.viewFilter.text} toggleable>

				<DropdownItem>
					<div onClick={this.optionClicked.bind(this, config.viewFilter.ALL)}>
						{config.viewFilter.ALL.text}
					</div>
				</DropdownItem>

				<DropdownItem>
					<div onClick={this.optionClicked.bind(this, config.viewFilter.LIVE)}>
						{config.viewFilter.LIVE.text}
					</div>
				</DropdownItem>

				<DropdownItem>
					<div onClick={this.optionClicked.bind(this, config.viewFilter.MAINTENANCE)}>
						{config.viewFilter.MAINTENANCE.text}
					</div>
				</DropdownItem>

			</Dropdown>
		)
	}
}