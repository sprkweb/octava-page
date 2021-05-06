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
            highlightNotes: []
        };

        this.updateOptions = this.updateOptions.bind(this);
    }

    updateOptions(type, highlightNotes) {
        this.setState({ type, highlightNotes });
    }

    render() {
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
                    <Row defaultOpenString="E" notes={notes} highlightNotes={this.state.highlightNotes} />
                </tbody>
            </table>

            <AutocompleteList id="notes" list={notes} />
        </div>;
    };
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);