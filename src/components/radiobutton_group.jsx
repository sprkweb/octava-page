import React from 'react';
import InputForm from './input_form'

export default class RadioButtonGroup extends InputForm {
    render() {
        const { values, className, name, defaultValue } = this.props;
        return <div className="btn-group btn-group-toggle" data-toggle="buttons">
            {values.map((value) =>
                <label className={`btn ${className}`} key={value}>
                    <input type="radio" name={name} 
                            value={value} defaultChecked={value == defaultValue} onChange={this.handleChange} /> {value}
                </label>
            )}
        </div>;
    }
}