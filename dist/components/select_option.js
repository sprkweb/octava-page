import React from "../../_snowpack/pkg/react.js";
import InputForm from "./input_form.js";
export default class SelectOption extends InputForm {
  render() {
    return /* @__PURE__ */ React.createElement("select", {
      className: "custom-select",
      defaultValue: this.props.defaultValue,
      onChange: this.handleChange
    }, this.props.options.map((x) => /* @__PURE__ */ React.createElement("option", {
      value: x.index,
      key: x.name
    }, x.name)));
  }
}
