import React from 'react';
import ReactDOM from 'react-dom';

import Row from './row';

import { standardTuning as tuning, notes } from '../model/music_theory';

const noteNumbers = [...Array(notes.length).keys()];

export default class GuitarNeck extends React.Component {
    render() {
        const rowNums = [...Array(this.props.rowsTotal).keys()];
        return <table className="container guitar">
            <thead>
                <tr>
                    {noteNumbers.map((n) =>
                        <th key={n}><span>{n}</span></th>
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