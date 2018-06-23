import React from 'react';

export default class MainComponent extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="top">
                    <div className="logo"><img src={this.props.logo}></img></div>
                </div>
                <div className="content"></div>
            </div>
        );
    }
}
