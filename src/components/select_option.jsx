import React from 'react';
import InputForm from './input_form'

export default class SelectOption extends InputForm {
    render() {
        return (
            <select className="custom-select" 
                defaultValue={this.props.defaultValue} onChange={this.handleChange}>
                {this.props.options.map((x) =>
                    <option value={x.index} key={x.name}>{x.name}</option>
                )}
            </select>
        );
    };
}