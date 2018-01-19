import React from 'react';

export default class TimePicker extends React.Component {

	constructor(props, context) {
	    super(props, context);
		this.state = {
			indices: this.props.values,
			attached: -1, // -1 : none, 0 : left dot, 1 : right dot
		}
		this.mouseUp = this.mouseUp.bind(this);
		this.mouseMove = this.mouseMove.bind(this);
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.attached == -1) {
			this.setState({indices: nextProps.values});
		}
	}

	mouseDown(e, idx) {
		if (this.props.disabled) {
			return;
		}
		e.preventDefault ();
		e.stopPropagation ();
		this.setState({"attached": idx})
		window.addEventListener("mouseup", this.mouseUp);
		window.addEventListener("mousemove", this.mouseMove);
	}

	mouseMove(e) {
		var mousePos = this.getMousePos(e);
		var imageElement = this.refs['body'];
		var containerX = imageElement.offsetWidth;
		var containerY = imageElement.offsetHeight;
		var xpercent = Math.max(0, Math.min(100, ((mousePos.x) / containerX) * 100));
		var ypercent = Math.max(0, Math.min(100, ((mousePos.y) / containerY) * 100));


		var x = this.state.attached;
		var newIndices = this.state.indices.splice(0);
		var newIndex = this.getIndex(xpercent);

		for(var i=0; i<x; i++) {
			newIndex = Math.max(newIndex, newIndices[i] + 1);
		}
		for(var i=x+1; i<newIndices.length; i++) {
			newIndex = Math.min(newIndex, newIndices[i] - 1);
		}

		newIndices[x] = newIndex
		this.setState({indices: newIndices});
	}

	getMousePos(evt) {
		var imageElement = this.refs['body'].getBoundingClientRect();
		var mouseX = evt.clientX - imageElement.left;
		var mouseY = evt.clientY - imageElement.top;
		return {
			x: mouseX,
			y: mouseY
		}
	}

	mouseUp(e) {
		e.stopPropagation();
		e.preventDefault();
		if (this.state.attached!=-1) {
			this.setState({"attached": -1})
	        window.removeEventListener("mouseup", this.mouseUp);
        	window.removeEventListener("mousemove", this.mouseMove);
		}
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(this.state.indices.splice(0));
		}
	}

	getLabel(idx) {
		return this.state.indices[idx] + ":00";
	}

	getPercent(idx) {
		return idx/this.props.nSegments*100;
	}

	getIndex(percent) {
		// inverse function of this.getPercent(idx) (percent is rounded)
		return Math.round(percent * this.props.nSegments / 100)
	}



	render() {
		return (
			<div className="timepicker" ref="body">
				<div className="timepicker-body">
					{
						Array.apply(null, { length: this.props.nSegments-1}).map((x, idx) => (
							<div className="timepicker-mark"
								style={{left: this.getPercent(idx+1)+"%"}}
								key={idx}
							></div>
						))
					}
					<div className="timepicker-range"
						style={{
							left: this.getPercent(this.state.indices[0])+"%", 
							width: this.getPercent(this.state.indices[1])-this.getPercent(this.state.indices[0])+"%", 
						}}
					/>
					<div
						className="range-dot"
						onMouseDown={(e)=>this.mouseDown(e, 0)}
						style={{left: this.getPercent(this.state.indices[0])+"%"}}>
						<span className="range-value">{this.getLabel(0)}</span>
					</div>
					<div
						className="range-dot"
						onMouseDown={(e)=>this.mouseDown(e, 1)}
						style={{left: this.getPercent(this.state.indices[1])+"%"}}>
						<span className="range-value">{this.getLabel(1)}</span>
					</div>
				</div>
			</div>
		);
	}
}