import { Component } from "react";
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      console.log("render is working!");

      return <h3 style={{ textAlign: "center" }}>Something went wrong!!!</h3>;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
