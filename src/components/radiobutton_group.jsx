import React from 'react';
import InputForm from './input_form'

export default class RadioButtonGroup extends InputForm {
    render() {
        const { values, className, name, defaultValue } = this.props;
        return <div className="btn-group">
            {values.map((value, i) => (<React.Fragment key={i}>
                <input type="radio" 
                    name={name}
                    value={value} 
                    defaultChecked={value == defaultValue} 
                    onChange={this.handleChange}
                    id={name + '-' + i}
                    className="btn-check"
                    autoComplete="off" /> 

                <label className={`btn ${className}`} htmlFor={name + '-' + i} >
                    {value}
                </label>
            </React.Fragment>)
            )}
        </div>;
    }
}