import React from 'react';
import { Link } from 'react-router';

export default class Path extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<div className="breadcrumbs">
							{this.props.path.map(
								(x, idx) => (
									(idx == 0) ? (<a className="bc-root" key={idx}>{x.info.name}</a>) :
									([
										<span className="bc-divider" key={-idx}> > </span>,
										this.props.linkOn(x) ? (
											<Link className="bc-element-on" key={idx} to={this.props.link(x)}>
												{x.info.name}
											</Link>
										) : (
											<Link className="bc-element-off" key={idx}>
												{x.info.name}
											</Link>
										)
									])
								)
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}