import React from 'react';
import ReactDOM from 'react-dom';

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function listOctave(note) {
  var octave = [];
  var start = notes.indexOf(note);
  if (start == -1) start = 0;
  for (var i = 0; i < notes.length; i++) {
    var index = (start + i) % notes.length;
    octave.push(notes[index]);
  }
  return octave;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootNote: 'E'
    };
    
    this.setRootNote = this.setRootNote.bind(this);
  }

  setRootNote(event) {
    this.setState({ rootNote: event.target.value });
  }
  
  render() {
    let numbers = [...Array(notes.length).keys()];
    return <div>
      <div className="form-inline">
        <div className="form-group root-note-form">
          <label htmlFor="rootNote">Root: </label>
          <input type="text" id="rootNote"
                 value={this.state.rootNote} onChange={this.setRootNote} 
                 className="form-control form-control-sm" />
        </div>
      </div>
      <div className="container guitar">
        <Row list={numbers} />
        <Row list={listOctave(this.state.rootNote)} />
      </div>
    </div>;
  };
}

function Row(params) {
  let list = params.list;
  return <div className="row">
    {list.map((note) => 
        <div className="col"><span>{note}</span></div>
    )}
  </div>;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);