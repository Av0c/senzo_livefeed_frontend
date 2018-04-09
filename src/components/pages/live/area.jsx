import React from 'react';
import config from 'config';
import { connect } from 'react-redux';
import {selectSensor} from 'actions/floorplan'
import ToolTip from 'react-portal-tooltip'
import { Link } from 'react-router';
import ReactTooltip from 'react-tooltip'

import * as a from 'actions/node';
import Floorplan from './floorplan';

class Area extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tooltipOpen: false,
		}
	}
	onMouseEnter(e){
		if (!this.props.dragged) {
			this.setState({tooltipOpen: true})
		}
	}
	onMouseLeave(e){
		if (!this.props.dragged) {
			this.setState({tooltipOpen: false})
		}
	}

	onMouseDown(e){
		e.stopPropagation();
		e.preventDefault();
		if (typeof this.props.onMouseDown == "function") {
			this.props.onMouseDown(e, this.props.node);
		}
	}

	getPos(node) {
		if (this.props.dragged) {
			return {x: this.props.draggingX, y: this.props.draggingY}
		}
		if (node.info.xpercent!=-1 && node.info.ypercent!=-1) {
			return {x: node.info.xpercent, y:node.info.ypercent}
		}
		// Mean position of all sensors
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

	componentWillReceiveProps(nextProps) {
		if (nextProps.dragged && this.state.tooltipOpen) {
			this.setState({tooltipOpen: false})
		}
	}

	listSensors(root, res) {
		var self = this;
		if (root) {
			if (root.type=="sensor") {
				res.push(root);
			} else {
				root.children.map((x) => self.listSensors(x, res));
			}
		}
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
		var sensors = [];
		this.listSensors(node, sensors);
		let sensorMap = this.props.sensorMap;
		sensors.forEach((sensor) => {
			var ss = sensorMap.get(sensor.id);
			if (ss) {
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

		if (this.props.dragged) {
			return (
				<div className={className} style={style}>
					{status.displayValue}
				</div>
			);
		} else {
			if (!this.props.thumbnail) {
				var tooltipPos = "top";
				if (pos.y<50) {
					tooltipPos = "bottom"
				}
				return(
					<div>
						<div id={"area"+node.id} className={className} style={style}
							// onClick={this.onClick.bind(this)}
							onMouseEnter={this.onMouseEnter.bind(this)}
							onMouseLeave={this.onMouseLeave.bind(this)}
							onMouseDown={this.onMouseDown.bind(this)}>
							{status.displayValue}
						</div>
						<ToolTip active={this.state.tooltipOpen} parent={"#area"+node.id} position={tooltipPos} arrow="center" group={this.props.tooltipGroup}
							style={{
								style: {
									background: "rgba(0,0,0,.8)",
									padding: 10,
									color: "#EEE",
									boxShadow: "5px 5px 3px rgba(0,0,0,.5)",
									borderRadius: 8,
									transition: 'all .2s ease-in-out',
								},
								arrowStyle: {
									color: 'rgba(0,0,0,.8)',
									borderColor: false,
									transition: 'all .2s ease-in-out',
								}
							}}
							tooltipTimeout={200}
						>
							<div>
								<div className="tooltip-header">
									{node.info.name}<br/>
								</div>
								{
									node.info.useownfp && <div>
										This {config.textOf[node.type]} has its own floorplan :<br/>
										{
											!this.state.tooltipShort && <Floorplan
												root={node}
												viewFilter={this.props.viewFilter}
												sensorMap={this.props.sensorMap}
												showDetails={true}
												thumbnail={true}
											/>
										}<br/>
										<Link to={"/live/"+node.id} target="_blank">Detailed floorplan</Link><br/>
										<Link to={"/locations?n="+node.id} target="_blank">Edit setting</Link><br/>
									</div>
								}
							</div>
						</ToolTip>
					</div>
				);
			} else {
				return(
					<div>
						<div 
							className={className} style={style}
							data-tip data-for={"area"+node.id}
							onMouseEnter={this.onMouseEnter.bind(this)}
							onMouseLeave={this.onMouseLeave.bind(this)}
							onMouseDown={this.onMouseDown.bind(this)}>
							{status.displayValue}
						</div>
						<ReactTooltip id={"area"+node.id} place="top" type="dark" effect="solid">
						{node.info.name}
						</ReactTooltip>
					</div>
				);
			}
		}
	}

	setOwnFloorPlan(node, useownfp) {
		var newNode = {id: node.id, info: {useownfp: useownfp}}
		this.props.dispatch(a.updateNode(newNode));
	}
}

function mapStateToProps(state) {
	return {
		sensorMap: state.nodeReducer.map,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Area);