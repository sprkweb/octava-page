import React from 'react';

import listOctave from '../listOctave';

import RootInputForm from './root_input_form'
import RadioButtonGroup from './radiobutton_group'
import SelectOption from './select_option';

export default class NotesOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'None',
            root: 'E',
            shape: 0
        };
        this.setType = this.setType.bind(this);
        this.setRoot = this.setRoot.bind(this);
        this.setShape = this.setShape.bind(this);
    }

    setType(type) {
        this.setNotesState({ type, shape: 0 });
    }
    
    setRoot(root) {
        this.setNotesState({ root });
    }

    setShape(shape) {
        this.setNotesState({ shape });
    }

    setNotesState(options) {
        this.setState((state, props) => {
            this.setNotes({ ...state, ...options }, props);
            return options;
        });
    }

    setNotes(state, props) {
        const { type, shape, root } = state;
        if (type == 'None') return [];
        const noteNumbers = props.shapes[type][shape].semitones;
        const octave = listOctave(root, props.notes, 0);
        const selectedNotes = noteNumbers.map((n) => octave[n]);
        props.onChange(type, selectedNotes);
    }

    render() {
        const types = ['None', ...Object.keys(this.props.shapes)];
        const typeIsNone = this.state.type == 'None';
        const shapes = typeIsNone ? [] : this.props.shapes[this.state.type];
        return (
            <div>
                <div className="shape-type-container">
                    <div className="container shape-form">
                        <RadioButtonGroup className="btn-light" name="shape"
                            values={types} defaultValue="None" onChange={this.setType} />
                    </div>
                </div>
                { !typeIsNone &&
                    <div className="shape-container" >
                        <RootInputForm rootNote={this.state.root} onChange={this.setRoot} />
                        <div className="container shape-form">
                            <SelectOption onChange={this.setShape} defaultValue={this.state.shape}
                                options={ shapes.map((s, i) => ({ index: i, name: s.name })) }  
                                />
                        </div>
                    </div>
                }
            </div>
        );
    };
}
