import React from "../../_snowpack/pkg/react.js";
import InputForm from "./input_form.js";
export default class RootInputForm extends InputForm {
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "form-inline"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "form-group root-note-form"
    }, /* @__PURE__ */ React.createElement("label", {
      htmlFor: "rootNote"
    }, "Root: "), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      list: "notes",
      defaultValue: this.props.rootNote,
      onChange: this.handleChange,
      className: "form-control form-control-sm"
    })));
  }
}
