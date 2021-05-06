import React from 'react';
import InputForm from './input_form'

export default class RootInputForm extends InputForm {    
    render() {
        return (
            <div className="form-inline">
                <div className="form-group root-note-form">
                    <label htmlFor="rootNote">Root: </label>
                    <input type="text" list="notes"
                        defaultValue={this.props.rootNote} onChange={this.handleChange}
                        className="form-control form-control-sm" />
                </div>
            </div>
        );
    };
}