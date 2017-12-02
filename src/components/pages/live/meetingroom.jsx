import React from 'react';
import config from 'config';
import { connect } from 'react-redux';
import {selectSensor} from 'actions/floorplan'

export class MeetingRoom extends React.Component{
	constructor(props){
		super(props);
	}

	onClick(e){
		e.stopPropagation();
		// this.props.selectSensor(this.props.node);
	}

	getPos(node) {
		var res = {x:0, y:0};
		node.children.forEach((child) => {
			if (child.type=="sensor") {
				res.x += child.info.xpercent;
				res.y += child.info.ypercent;
			}
		});
		res.x /= node.children.length;
		res.y /= node.children.length;
		return res;
	}

	getStatus(node) {
		var res = {
			inuse: 0,
			faulty: 0,
			total: node.children.length,
			registered: 0,
			standby: 0,
			displayValue: 0
		};
		let sensorMap = this.props.sensorMap;
		node.children.forEach((child) => {
			if (child.type=="sensor" && sensorMap.get(child.id)) {
				var ss = sensorMap.get(child.id);
				res.inuse += ss.inuse;
				res.faulty += ss.faulty;
				res.registered += ss.registered;
				res.standby += ss.standby;
			}
		});
		return res;		
	}

	render(){
		let node = this.props.node;
		let pos = this.getPos(node);
		let status = this.getStatus(node);

		let style ={left: pos.x + '%', top: pos.y + '%'};
		let className='circle';
		if (this.props.selectedMR && (this.props.selectedMR.id == node.id)){
			className += ' selected'
		}
		let type = "";
		if (status.registered > 0) {
			if (status.faulty == status.registered) {
				type = 'faulty';
			} else {
				if (status.inuse > 0) {
					type = 'inuse';
				} else if (status.standby) {
					type = 'standby';
				}
			}
		} else {
			type = `unregistered`
		}
		className += " "+type;

		if (this.props.viewFilter==config.viewFilter.LIVE && (type=="unregistered" || type=="faulty")) {
			// hide broken / unregistered meeting room in live view.
			className += ` hidden`;
		}
		if (this.props.viewFilter==config.viewFilter.MAINTENANCE && (type!="unregistered" && type!="faulty")) {
			// hide good and registered meeting room in maintenance view.
			className += ` hidden`;
		}

		return(
			<div className={className} style={style}
				onClick={this.onClick.bind(this)}>
				{status.total}
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		selectSensor: (node) => dispatch(selectSensor(node))
	}
}

export default connect(null, mapDispatchToProps)(MeetingRoom);

