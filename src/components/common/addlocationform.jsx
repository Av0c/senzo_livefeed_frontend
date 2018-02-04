import React from 'react';
import store from '../../store';

import CountriesAndTimezones from 'countries-and-timezones';
import getCountryName, { isoCountries } from '../../countries';

export default class AddLocationForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        let node = this.props.node
        this.state = {
            option: (node.type=="root" ? "Customer" :"Country"),
            name: "",
            location: 'sub',
            country: (node.type == "multicountry" ? "Multi" : CountriesAndTimezones.getCountriesForTimezone(node.info.location)[0].id),
            timezone: node.info.location,
        };
    }

    changeHandler(e) {
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
        let parent = this.props.node
        let parentCode = (parent.type == "multicountry" ? "Multi" : CountriesAndTimezones.getCountriesForTimezone(parent.info.location)[0].id);
        let countries = CountriesAndTimezones.getAllCountries()
        if (parentCode == 'Multi' || parent.type=="customer") {
            let codes = Object.keys(countries);
            codes.sort((a, b) => countries[a].name.localeCompare(countries[b].name)); // sort country codes by full name.
            return codes.map((code, index) => {
                return <option key={code} value={code}>{countries[code].name}</option>
            });
        }
        else {
            console.log(parentCode)
            return <option value={parentCode}>{countries[parentCode].name}</option>
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
        let isArea = (this.props.node.type == 'meeting_room' || this.props.node.type == 'open_area');
        let node = this.props.node;
        let allowMulti = (this.state.location=="sub" && node.type == 'customer') || (this.state.location=="top" && node.parent.type == 'customer');
        let noTop = (node.id == store.getState().myAccountReducer.user.rootnodeid);
        let timezones = this.generateTimeZoneOptions();
        let countries = this.generateCountryOptions();
        var addCustomer = (this.props.node.type == "root");
        if (addCustomer) {
            noTop = true;
            allowMulti = false;
        }
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
                            {allowMulti && <label htmlFor="country">
                                <input className="zone-radio" onChange={this.changeHandler.bind(this)} id="option" value="Country" type="radio" name="zone" checked={this.state.option == 'Country'} /><span>Country</span>
                            </label>
                            }
                            {allowMulti && <label htmlFor="multi">
                                <input className="zone-radio" onChange={this.changeHandler.bind(this)} id="option" value="Multi" type="radio" name="zone" checked={this.state.option == 'Multi'} />
                                <span>Multi-Country Region</span>
                            </label>
                            }
                            {addCustomer && <label htmlFor="customer">
                                <input className="zone-radio" onChange={this.changeHandler.bind(this)} id="option" value="Customer" type="radio" name="zone" checked={this.state.option == 'Customer'} />
                                <span>Customer</span>
                            </label>
                            }
                        </div>
                        <div className="user_email">
                            <label>
                                <span>Name </span>
                                <input type="username" id="name" onChange={this.changeHandler.bind(this)} required />
                            </label>
                        </div>

                        {noTop || <div className="country">
                            <label>Location</label>
                            <select value={this.state.location} id="location" onChange={this.changeHandler.bind(this)}>
                                <option value='sub' disabled={this.state.option=="Multi" && node.type != "customer"}>Sub location</option>
                                <option value='top'>Top location</option>
                            </select>
                        </div>}

                        {this.state.option == 'Multi' || this.state.option == 'Customer' || <div>
                            <div className="country">
                                <label>Country</label>
                                <select id="country" value={this.state.country} onChange={this.changeHandler.bind(this)}>
                                    {countries}
                                </select>
                            </div>
                            <div className="timezone" >
                                <label>Timezone</label>
                                <select value={this.state.timezone} id="timezone" onChange={this.changeHandler.bind(this)}>
                                    {timezones}
                                </select>
                            </div>
                        </div>
                        }
                    </div> : <p className="add-location-form-notification"> Sorry, You cannot add sublocation of area/meeting room</p>}
                    <div className="modal-footer">
                        <button className="btn btn-default" onClick={this.props.closeAddLocationForm} type="button" data-dismiss="modal">Cancel</button>
                        {isArea || <button className="btn btn-success" onClick={() => {
                            console.log(this)
                            this.props.submit(node, this.state);
                            this.props.closeAddLocationForm();
                        }} type="button">Confirm</button>}
                    </div>
                </div>
            </div>
        );
    }
}