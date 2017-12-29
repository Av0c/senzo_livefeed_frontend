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
									(idx == 0) ? (<a className="bc-root" key={idx}>{x.info.name}</a>) :
									([
										<span className="bc-divider" key={-idx}> > </span>,
										/* Must fix hash sign in the future !!!*/
										(x.info.hasfloorplan) ? (
											<a className="bc-element-on" key={idx} href={"#/live/" + x.id}>
												{x.info.name}
											</a>
										) : (
											<a className="bc-element-off" key={idx}>
												{x.info.name}
											</a>
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