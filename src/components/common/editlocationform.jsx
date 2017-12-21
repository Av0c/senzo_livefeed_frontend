import React from 'react';
import CountriesAndTimezones from 'countries-and-timezones';
import getCountryName, { isoCountries } from '../../countries';

export default class EditLocationForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        let node = this.props.node;
        this.setState({
            name: node.info.name,
            country: node.info.details.country,
            timezone: node.info.location
        });
    }

    changeHandler(e) {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: value });
        if(key == 'country') {
            if(value != this.props.node.info.location) {
                let locations = this.getTimeZonesOfCountry();
                this.setState({timezone: locations[0]});
            }
        }
    }

    generateTimeZoneOptions() {
        let options = this.getTimeZonesOfCountry();
        return options.map((element, index) => {
            return <option key={index} value={element}>{element}</option>
        });
    }

    generateCountryOptions() {
        let options = Object.keys(isoCountries);
        return options.map((element, index) => {
            return <option key={index} value={element}>{element}</option>
        });
    }

    getTimeZonesOfCountry() {
        let country = this.state.country || this.props.node.info.details.country;
        return CountriesAndTimezones.getTimezonesForCountry(getCountryName(country)).map((element) => {
            return element.name;
        });
    }

    render() {
        let node = this.props.node;
        let multi = (node.info.details.country == 'Multi');
        let locations = this.getTimeZonesOfCountry();
        let timezones = this.generateTimeZoneOptions();
        let countries = this.generateCountryOptions();
        return (
            <div>
                <div className={"modal-overlay" + (this.props.isEditingLocation ? "" : " closed")} onClick={this.props.closeEditLocationForm}></div>
                <div className={"add-account-wrapper invite-modal" + (this.props.isEditingLocation ? "" : " closed")}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="close" onClick={this.props.closeEditLocationForm}>×</button>
                            <h4 className="modal-title">Edit Location</h4>
                        </div>
                        <div className="modal-body settings-wrapper">

                            <div className="user_email">
                                <label>
                                    <span>Name </span>
                                    <input type="username" id="name" value={this.state.name} onChange={this.changeHandler.bind(this)} required />
                                </label>
                            </div>
                            {multi || <div>
                                <div className="country">
                                    <label>Country</label>
                                    <select value={this.state.country} id="country" onChange={this.changeHandler.bind(this)}>
                                        {countries}
                                    </select>
                                </div>
                                <div className="timezone">
                                    <label>Timezone</label>
                                    <select value={this.state.timezone} id="timezone" onChange={this.changeHandler.bind(this)}>
                                        {timezones}
                                    </select>
                                </div>
                            </div>}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-default" type="button" onClick={this.props.closeEditLocationForm}>Cancel</button>
                            <button className="btn btn-success" type="button" onClick={() => {
                                this.props.submit(node, this.state, locations);
                                this.props.closeEditLocationForm();
                            }} >Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}