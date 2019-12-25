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
    return <div>
      <div class="form-inline">
        <div class="form-group root-note-form">
          <label for="rootNote">Root: </label>
          <input type="text" id="rootNote"
                 value={this.state.rootNote} onChange={this.setRootNote} 
                 class="form-control form-control-sm" />
        </div>
      </div>
      <div class="container guitar">
        <Row list={[...Array(notes.length).keys()]} />
        <Row list={listOctave(this.state.rootNote)} />
      </div>
    </div>;
  };
}

function Row(params) {
  list = params.list;
  return <div class="row">
    {list.map((note) => 
        <div class="col"><span>{note}</span></div>
    )}
  </div>;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);