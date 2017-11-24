import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';

import { connect } from 'react-redux';

export default class NodeFilterDropdown extends React.Component {
	optionClicked(node) {
		this.props.click(node);
	}

	listAreas(root, res) {
		var self = this;
		if (root) {
			if(root.type==config.room.MEETINGROOM.code || root.type==config.room.OPENAREA.code) {
				res.push(root);
			}
			//  else if (root.type!="sensor") {
			// 	root.children.forEach((child) => {
			// 		self.listAreas(child, res);
			// 	})
			// }
		}
	}

	render() {
		var areas = [];
		var self = this;
		this.props.root.children.forEach((child) => {
			self.listAreas(child, areas);
		})
		var header = (this.props.nodeFilter.id==this.props.root.id) ? "All area" : this.props.nodeFilter.info.name;

		return (
			<Dropdown header={header} toggleable>

				<DropdownItem>
					<div onClick={this.optionClicked.bind(this, this.props.root)}>
						All area
					</div>
				</DropdownItem>
				{
					areas.map(
						(x, idx) => (
							<DropdownItem key={x.id}>
								<div onClick={this.optionClicked.bind(this, x)}>
									{x.info.name}
								</div>
							</DropdownItem>
						)
					)
				}

			</Dropdown>
		)
	}
}