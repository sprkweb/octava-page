import React from "../../_snowpack/pkg/react.js";
import InputForm from "./input_form.js";
export default class RadioButtonGroup extends InputForm {
  render() {
    const {values, className, name, defaultValue} = this.props;
    return /* @__PURE__ */ React.createElement("div", {
      className: "btn-group btn-group-toggle",
      "data-toggle": "buttons"
    }, values.map((value) => /* @__PURE__ */ React.createElement("label", {
      className: `btn ${className}`,
      key: value
    }, /* @__PURE__ */ React.createElement("input", {
      type: "radio",
      name,
      value,
      defaultChecked: value == defaultValue,
      onChange: this.handleChange
    }), " ", value)));
  }
}
