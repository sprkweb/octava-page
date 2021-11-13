import React from 'react';
import listOctave from '../model/list_octave';

export default class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openString: this.props.defaultOpenString
        };

        this.setOpenString = this.setOpenString.bind(this);
    }

    setOpenString(event) {
        this.setState({ openString: event.target.value });
    }

    render() {
        const openString = this.state.openString;
        const list = listOctave(openString);
        const highlights = this.props.highlightNotes;
        const noHighlight = highlights.length == 0;
        return <tr>
            <th scope="row" className="open-string-note">
                <input type="text" list="notes"
                    title="Pitch of the string"
                    defaultValue={openString} onChange={this.setOpenString}
                    className={ `form-control form-control-sm  ${highlights.includes(openString) ? 'active-open-string' : ''}` } />
            </th>
            {list.map((note) =>
                <td key={note} className="fret-note">
                    <span className={ noHighlight ? '' : (highlights.includes(note) ? 'active-note' : 'hidden-note') }>
                        {note}
                    </span>
                </td>
            )}
        </tr>;
    };
}
