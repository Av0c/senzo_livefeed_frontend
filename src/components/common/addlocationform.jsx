import React from 'react';
import CountriesAndTimezones from 'countries-and-timezones';
import getCountryName, { isoCountries } from '../../countries';

export default class AddLocationForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            option: 'Country'
        };
    }

    changeHandler(e) {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: value });
    }

    generateTimeZoneOptions() {
        let options = this.getTimeZonesOfCountry();
        return options.map((element, index) => {
            return <option key={index} value={element}>{element}</option>
        });
    }

    generateCountryOptions() {
        let country = this.props.node.info.details.country;
        if (country == 'Multi') {
            let options = Object.keys(isoCountries);
            return options.map((element, index) => {
                return <option key={index} value={element}>{element}</option>
            });
        }
        else {
            return <option value={country}>{country}</option>
        }
    }

    getTimeZonesOfCountry() {
        let country = '';
        let location = this.props.node.info.details.country;
        if (location != 'Multi') {
            country = location;
        }
        else {
            country = this.state.country || 'Afghanistan';
        }
        return CountriesAndTimezones.getTimezonesForCountry(getCountryName(country)).map((element) => {
            return element.name;
        });
    }

    render() {
        let isArea = (this.props.node.type == 'meeting_room' || this.props.node.type == 'open_area');
        let node = this.props.node;
        let multi = (node.info.details.country == 'Multi');
        let timezones = this.generateTimeZoneOptions();
        let countries = this.generateCountryOptions();
        return (
            <div>
                <div className={"modal-overlay" + (this.props.isAddingLocation ? "" : " closed")} onClick={this.props.closeAddLocationForm}></div>
                <div className={"add-account-wrapper invite-modal" + (this.props.isAddingLocation ? "" : " closed")}>
                    <div className="modal-header">
                        <button className="close" onClick={this.props.closeAddLocationForm}>×</button>
                        <h4 className="modal-title">Add Location</h4>
                    </div>
                    {!isArea ? <div className="modal-body settings-add-location-wrapper">
                        <div className="zone-type">
                            {multi && <label htmlFor="country">
                                <input className="zone-radio" onChange={this.changeHandler.bind(this)} id="option" value="Country" type="radio" name="zone" checked={this.state.option == 'Country'} /><span>Country</span>
                            </label>
                            }
                            {multi && <label htmlFor="multi">
                                <input className="zone-radio" onChange={this.changeHandler.bind(this)} id="option" value="Multi" type="radio" name="zone" checked={this.state.option == 'Multi'} /><span>Multi-Country Region  </span>
                            </label>
                            }
                        </div>
                        <div className="user_email">
                            <label>
                                <span>Name </span>
                                <input type="username" id="name" onChange={this.changeHandler.bind(this)} required />
                            </label>
                        </div>
                        {this.state.option == 'Multi' || <div className="country">
                            <label>Country</label>
                            <select id="country" onChange={this.changeHandler.bind(this)}>
                                {countries}
                            </select>
                        </div>}

                        {this.state.option == 'Multi' || <div className="timezone" >
                            <label>Timezone</label>
                            <select value={this.state.timezone} id="timezone" onChange={this.changeHandler.bind(this)}>
                                {timezones}
                            </select>
                        </div>
                        }
                    </div> : <p className="add-location-form-notification"> Sorry, You cannot add sublocation of area/meeting room</p>}
                    <div className="modal-footer">
                        <button className="btn btn-default" onClick={this.props.closeAddLocationForm} type="button" data-dismiss="modal">Cancel</button>
                        {isArea || <button className="btn btn-success" onClick={() => {
                            this.props.submit(node, this.state, timezones[0].props.value);
                            this.props.closeAddLocationForm();
                        }} type="button">Confirm</button>}
                    </div>
                </div>
            </div>
        );
    }
}