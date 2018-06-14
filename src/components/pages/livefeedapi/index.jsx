import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config";
import LeftMenu from 'components/common/leftmenu';
import LiveFeedForm from './livefeedform';

import API from "./api";

class LiveFeedAPI extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}

	render() {
		return (
			<div className="settings-wrapper live-feed-api-block">
				<div className="container-fluid">
					<div className="row">
                        <div className="col-md-12">
                            <LeftMenu overview='' comparison='' />
                        </div>
                    </div>
                    <hr className="setting-divider"></hr>
					<div className="row">
						<div className="col-md-12">
							<h2 className="pull-left" style={{marginBottom: "20px"}}>Live feed & SenzoAPI settings</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="live-feed-container">
								<div className="popup-container">
									<h3 className="live-feed-title">Live Feeds</h3>
									<div className="add-feed" onClick={() => {this.feedForm.open()}}>Add Feed</div>
									<div className="all-feed-container">
										<p>Current feed here</p>
										<p>Current feed here</p>
										<p>Current feed here</p>
										<p>Current feed here</p>
										<p>Current feed here</p>
									</div>
								</div>
							</div>
							<div className="api-container">
								<div className="popup-container">
									<API />
								</div>
							</div>
						</div>
					</div>
				</div>
				<LiveFeedForm
					tree={this.props.tree}
                    ref={(elem) => {this.feedForm = elem}}
                    onSubmit={(e, states, fClose) => {console.log(states); fClose();}}
                />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tree: state.overviewReducer.customerOverview,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveFeedAPI);
