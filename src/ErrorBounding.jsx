import React, { Component } from "react";

export class ErrorBounding extends Component {
  constructor() {
    //this is the first phase of mounting phase
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log("this is getDerivedStateFromError()");
    if (error) return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("this is componentDidCatch()");
    console.log(error, errorInfo);
  }
  render() {
    return (
      <>
        {this.state.hasError ? (
          <h1>Something went to wrong in Application</h1>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBounding;
