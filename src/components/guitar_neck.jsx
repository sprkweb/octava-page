import React from 'react';
import ReactDOM from 'react-dom';

import Row from './row';

import { standardTuning as tuning, notes } from '../model/music_theory';

const noteNumbers = [...Array(notes.length).keys()];

export default class GuitarNeck extends React.Component {
    render() {
        const rowNums = [...Array(this.props.rowsTotal).keys()];
        return <table className="container guitar">
            <caption>
                Notes on the guitar
            </caption>

            <thead>
                <tr>
                    <th scope="col" 
                        className="hint"> 
                        Open string
                    </th>
                    <th scope="colgroup" 
                        colSpan={noteNumbers.length - 1} 
                        className="hint">
                        Guitar frets
                    </th>
                </tr>
                <tr>
                    {noteNumbers.map((n) =>
                        <th key={n} 
                        scope="col" 
                        className="fret-num"
                        title={ n === 0 ? 'Open string' : `Fret №${n}`}>
                            <span>{n}</span>
                        </th>
                    )}
                </tr>
            </thead>

            <tbody>
            {rowNums.map((index) => 
                <Row 
                    defaultOpenString={tuning[index % tuning.length]} 
                    highlightNotes={this.props.highlightNotes} 
                    key={index} 
                    />
            )}
            </tbody>
        </table>;
    }
}