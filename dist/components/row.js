import React from "../../_snowpack/pkg/react.js";
import listOctave from "../listOctave.js";
export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openString: this.props.defaultOpenString
    };
    this.setOpenString = this.setOpenString.bind(this);
  }
  setOpenString(event) {
    this.setState({openString: event.target.value});
  }
  render() {
    const openString = this.state.openString;
    const list = listOctave(openString, this.props.notes);
    const highlights = this.props.highlightNotes;
    const noHighlight = highlights.length == 0;
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      list: "notes",
      defaultValue: openString,
      onChange: this.setOpenString,
      className: `form-control form-control-sm  ${highlights.includes(openString) ? "active-open-string" : ""}`
    })), list.map((note) => /* @__PURE__ */ React.createElement("td", {
      key: note
    }, /* @__PURE__ */ React.createElement("span", {
      className: noHighlight ? "" : highlights.includes(note) ? "active-note" : "hidden-note"
    }, note))));
  }
}
