import React from "../../_snowpack/pkg/react.js";
export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onChange(event.target.value);
  }
}
