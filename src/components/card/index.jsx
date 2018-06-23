import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card-popup">
                <div className="card-title">{this.props.title}</div>
                <div className="card-category">Occupancy</div>
                <div className="card-chart">
                    Hello
                </div>
            </div>
        );
    }
}
