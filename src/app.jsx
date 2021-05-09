import React from 'react';
import ReactDOM from 'react-dom';

import NotesOptions from './components/notes_options'
import AutocompleteList from './components/autocomplete_list'
import Row from './components/row';

import { notes, shapes } from './music_theory'
const noteNumbers = [...Array(notes.length).keys()];

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
        const rowNums = [...Array(this.state.rowsTotal).keys()];
        const tuning = ['E', 'B', 'G', 'D', 'A'];
        return <div>
            <NotesOptions shapes={shapes} notes={notes} onChange={this.updateOptions} />
            <table className="container guitar">
                <thead>
                    <tr>
                        {noteNumbers.map((n) =>
                            <th key={n}><span>{n}</span></th>
                        )}
                    </tr>
                </thead>

                <tbody>
                {rowNums.map((index) => 
                    <Row defaultOpenString={tuning[index % tuning.length]} notes={notes} 
                                highlightNotes={this.state.highlightNotes} key={index} />
                )}
                </tbody>
            </table>
            <button onClick={this.addRow}
                type="button" className="btn btn-light btn-control-rows">+</button>
            <button onClick={this.removeRow}
                type="button" className="btn btn-light btn-control-rows">−</button>

            <AutocompleteList id="notes" list={notes} />
        </div>;
    };
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);