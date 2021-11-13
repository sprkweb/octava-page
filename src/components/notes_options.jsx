import React from 'react';

import listOctave from '../model/list_octave';

import RootInputForm from './root_input_form'
import RadioButtonGroup from './radiobutton_group'
import SelectOption from './select_option';

export default class NotesOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'Notes',
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
        if (type == 'Notes') {
            props.onChange(type, []);
            return;
        }
        const noteNumbers = props.shapes[type][shape].semitones;
        const octave = listOctave(root, 0);
        const selectedNotes = noteNumbers.map((n) => octave[n]);
        props.onChange(type, selectedNotes);
    }

    render() {
        const types = ['Notes', ...Object.keys(this.props.shapes)];
        const typeIsNotes = this.state.type == 'Notes';
        const shapes = typeIsNotes ? [] : this.props.shapes[this.state.type];
        return (
            <div>
                <div className="shape-type-container">
                    <div className="container shape-form">
                        <RadioButtonGroup 
                            className="btn-outline-light" 
                            name="shape"
                            values={types} 
                            defaultValue="Notes" 
                            onChange={this.setType} />
                    </div>
                </div>
                { !typeIsNotes &&
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
