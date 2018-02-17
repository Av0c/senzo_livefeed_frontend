import React from 'react';
import CountriesAndTimezones from 'countries-and-timezones';
import getCountryName, { isoCountries } from '../../countries';

export default class EditLocationForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        let node = this.props.node;
        this.state = {
            name: node.info.name,
            country: (node.type == "multicountry" ? "Multi" : CountriesAndTimezones.getCountriesForTimezone(node.info.location)[0].id),
            timezone: node.info.location
        };
    }

    changeHandler(e) {
        console.log("change!");
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: value });
        if(key == 'country') {
            if(value != this.state.country) {
                let locations = this.getTimeZonesOfCountry(value);
                this.setState({timezone: locations[0]});
                console.log(locations[0])
            }
        }
    }

    generateCountryOptions() {
        let parent = this.props.node.parent
        let parentCountry = (parent.type == "multicountry" ? "Multi" : CountriesAndTimezones.getCountriesForTimezone(parent.info.location)[0].id);
        let countries = CountriesAndTimezones.getAllCountries()
        if (parentCountry == 'Multi' || parent.type=="customer") {
            let codes = Object.keys(countries);
            codes.sort((a, b) => countries[a].name.localeCompare(countries[b].name)); // sort country codes by full name.
            return codes.map((code, index) => {
                return <option key={code} value={code}>{countries[code].name}</option>
            });
        }
        else {
            return <option value={parentCountry}>{countries[parentCountry].name}</option>
        }
    }

    getTimeZonesOfCountry(country) {
        return CountriesAndTimezones.getTimezonesForCountry(country).map((element) => {
            return element.name;
        });
    }

    generateTimeZoneOptions() {
        console.log(this.state.country)
        let options = this.getTimeZonesOfCountry(this.state.country);
        return options.map((element, index) => {
            return <option key={index} value={element}>{element}</option>
        });
    }

    render() {
        let node = this.props.node;
        let multi = (node.type == "multicountry");
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
                            {!multi && <div>
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
                                this.props.submit(node, this.state);
                            }} >Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}