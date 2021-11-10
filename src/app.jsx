import React from 'react';
import ReactDOM from 'react-dom';

import NotesOptions from './components/notes_options'
import AutocompleteList from './components/autocomplete_list'
import GuitarNeck from './components/guitar_neck';

import { notes, shapes } from './model/music_theory';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'None',
            highlightNotes: [],
            rowsTotal: 6,
        };

        this.updateOptions = this.updateOptions.bind(this);
        this.addRow = this.addRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
    }

    updateOptions(type, highlightNotes) {
        this.setState({ type, highlightNotes });
    }

    addRow() {
        this.setState((state) => {
            return { rowsTotal: state.rowsTotal + 1 };
        });
    }

    removeRow() {
        this.setState((state) => {
            return { rowsTotal: state.rowsTotal - 1 };
        });
    }

    render() {
        return <React.Fragment>
            <NotesOptions shapes={shapes} onChange={this.updateOptions} />
            <AutocompleteList id="notes" list={notes} />
            <main>
                <GuitarNeck 
                    rowsTotal={this.state.rowsTotal} 
                    highlightNotes={this.state.highlightNotes} />
                <button onClick={this.addRow}
                    type="button" className="btn btn-light btn-control-rows">+</button>
                <button onClick={this.removeRow}
                    type="button" className="btn btn-light btn-control-rows">−</button>
            </main>
        </React.Fragment>;
    };
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);