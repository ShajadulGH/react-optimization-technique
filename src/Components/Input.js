// import React from "react";
// const Input = (props) => {
//   console.log("Input Running");
//   return <input onChange={props.onChange} type="number" />;
// };
// export default Input;
import { Component } from "react";
class Input extends Component {
  render() {
    return <input onChange={this.props.onChange} type="number" />;
  }
}
export default Input;
