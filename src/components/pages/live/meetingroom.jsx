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
		var status = {
			inuse: 0,
			faulty: 0,
			total: node.children.length,
			registered: 0,
			standby: 0,
			displayValue: 0,
			type: "free"
		};
		let sensorMap = this.props.sensorMap;
		node.children.forEach((child) => {
			if (child.type=="sensor" && sensorMap.get(child.id)) {
				var ss = sensorMap.get(child.id);
				status.inuse += ss.inuse;
				status.faulty += ss.faulty;
				status.registered += ss.registered;
				status.standby += ss.standby;
			}
		});
		if (status.registered > 0) {
			if (status.faulty == status.registered) {
				status.type = 'faulty';
			} else {
				if (status.inuse > 0) {
					status.type = 'inuse';
				} else if (status.standby) {
					status.type = 'standby';
				}
			}
		} else {
			status.type = `unregistered`
		}

		switch (status.type) {
			case "free":
				status.displayValue = status.total;
			case "inuse":
				status.displayValue = status.inuse;
			case "standby":
				status.displayValue = status.total;
			case "faulty":
				status.displayValue = status.total;
			case "unregistered":
				status.displayValue = status.total;
		}

		return status;		
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

		className += " "+status.type;

		if (this.props.viewFilter.code=="LIVE" && (status.type=="unregistered" || status.type=="faulty")) {
			// hide broken / unregistered meeting room in live view.
			className += ` hidden`;
		}
		if (this.props.viewFilter.code=="MAINTENANCE" && (status.type!="unregistered" && status.type!="faulty")) {
			// hide good and registered meeting room in maintenance view.
			className += ` hidden`;
		}

		return(
			<div className={className} style={style}
				onClick={this.onClick.bind(this)}>
				{status.displayValue}
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

