import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import NotesOptions from "./components/notes_options.js";
import AutocompleteList from "./components/autocomplete_list.js";
import Row from "./components/row.js";
import {notes, shapes} from "./music_theory.js";
const noteNumbers = [...Array(notes.length).keys()];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "None",
      highlightNotes: [],
      rowsTotal: 6
    };
    this.updateOptions = this.updateOptions.bind(this);
    this.addRow = this.addRow.bind(this);
    this.removeRow = this.removeRow.bind(this);
  }
  updateOptions(type, highlightNotes) {
    this.setState({type, highlightNotes});
  }
  addRow() {
    this.setState((state) => {
      return {rowsTotal: state.rowsTotal + 1};
    });
  }
  removeRow() {
    this.setState((state) => {
      return {rowsTotal: state.rowsTotal - 1};
    });
  }
  render() {
    const rowNums = [...Array(this.state.rowsTotal).keys()];
    const tuning = ["E", "B", "G", "D", "A"];
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(NotesOptions, {
      shapes,
      notes,
      onChange: this.updateOptions
    }), /* @__PURE__ */ React.createElement("table", {
      className: "container guitar"
    }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, noteNumbers.map((n) => /* @__PURE__ */ React.createElement("th", {
      key: n
    }, /* @__PURE__ */ React.createElement("span", null, n))))), /* @__PURE__ */ React.createElement("tbody", null, rowNums.map((index) => /* @__PURE__ */ React.createElement(Row, {
      defaultOpenString: tuning[index % tuning.length],
      notes,
      highlightNotes: this.state.highlightNotes,
      key: index
    })))), /* @__PURE__ */ React.createElement("button", {
      onClick: this.addRow,
      type: "button",
      className: "btn btn-light btn-control-rows"
    }, "+"), /* @__PURE__ */ React.createElement("button", {
      onClick: this.removeRow,
      type: "button",
      className: "btn btn-light btn-control-rows"
    }, "−"), /* @__PURE__ */ React.createElement(AutocompleteList, {
      id: "notes",
      list: notes
    }));
  }
}
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
