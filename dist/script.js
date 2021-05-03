import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
function listOctave(note) {
  var octave = [];
  var start = notes.indexOf(note);
  if (start == -1)
    start = 0;
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
      rootNote: "E"
    };
    this.setRootNote = this.setRootNote.bind(this);
  }
  setRootNote(event) {
    this.setState({rootNote: event.target.value});
  }
  render() {
    let numbers = [...Array(notes.length).keys()];
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "form-inline"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "form-group root-note-form"
    }, /* @__PURE__ */ React.createElement("label", {
      htmlFor: "rootNote"
    }, "Root: "), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "rootNote",
      value: this.state.rootNote,
      onChange: this.setRootNote,
      className: "form-control form-control-sm"
    }))), /* @__PURE__ */ React.createElement("div", {
      className: "container guitar"
    }, /* @__PURE__ */ React.createElement(Row, {
      list: numbers
    }), /* @__PURE__ */ React.createElement(Row, {
      list: listOctave(this.state.rootNote)
    })));
  }
}
function Row(params) {
  let list = params.list;
  return /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, list.map((note) => /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement("span", null, note))));
}
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
