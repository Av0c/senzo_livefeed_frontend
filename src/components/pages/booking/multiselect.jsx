import React from 'react';
import Select from 'react-select';

// Searchbar used in:
// Booking room selector

export default class MultiSelect extends React.Component {

    optionRenderer(option) {
        var render;
        if (option.selected) {
            render = (
                <div className="multi-option-container">
                    <div className="multi-label-selected">{option.label}</div>
                    <i className="material-icons multi-indicator-selected">check</i>
                </div>
            )
        } else {
            render = (
                <div className="multi-option-container">
                    <div className="multi-label">{option.label}</div>
                    <i className="material-icons multi-indicator"></i>
                </div>
            )
        }
        return render;
    }

    render() {
        return (
            <Select
                autoFocus={true}
                isOpen={true}

                onBlurResetsInput={true}
				onSelectResetsInput={true}
                onChange={this.props.onChange}
                onOpen={this.props.onOpen}
                onFocus={this.props.onFocus}
                onClose={this.props.onClose}
                clearable={false}
                openOnFocus={true}
                openOnClick={true}
                closeOnSelect={false}
                placeholder="Select rooms to display"

                optionRenderer={this.optionRenderer}

                options={this.props.options}
                value={this.props.value}
                valueRenderer={() => {return this.props.displayValue}}
            />
        );
    }
}
