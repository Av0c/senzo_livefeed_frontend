import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card-container flat-popup">
                <div className="card-top">
                    <div className="card-title">{this.props.title}</div>
                    <div className="card-status">
                        <h1>Desks available</h1>
                        <p>{this.props.desks[0] + "/" + this.props.desks[1]}</p>
                    </div>
                </div>
                <div className="card-chart">

                </div>
            </div>
        );
    }
}
