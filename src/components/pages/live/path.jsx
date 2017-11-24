import React from 'react';

export default class Path extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<div className="breadcrumbs">
							{this.props.path.map(
								(x, idx) => (
									(idx == 0) ? (<a className="bc-root" key={idx}>{x}</a>) :
									([
										<span className="bc-divider" key={-idx}> > </span>,
										<a className="bc-element" key={idx}>{x}</a>
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