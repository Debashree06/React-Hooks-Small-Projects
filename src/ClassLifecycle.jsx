import React, { Component } from "react";

export class ClassLifecycle extends Component {
  constructor() {
    //this is the first phase of mounting phase
    super();
    //if we remove super method than the error arises
    this.state = {
      name: "Virat",
      count: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    //this is the second method of mounting phase
    //we can change the state by using props
    //this is also the first method of updating phase
    {
      //  console.log(props,state)
      console.log("this is the getDerivedStateFromProps()");
      return { name: props.name };
    }
  }

  componentDidMount() {
    //this is the last method of mounting phase
    //used to handle component's side effect after final render
    //this methods executes  only for once in components life-cycle
    console.log("this is componentDidMount()");
  }

  shouldComponentUpdate() {
    //this is the second method of updating phase
    //this method returns a boolean value which defines the component re-render
    console.log("this is shouldComponentUpdate()");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("this is getSnapshotBeforeUpdate()");
    console.log(prevProps, prevState);
    return "abcd";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("this is componentDidUpdate()");
  }

  componentWillUnmount() {
    //this is the method of unmounting phase
    //this method executes right before the component is going to remove from the dom
    console.log("this is componentWillUnmount()");
  }

  render() {
    //this is the third method of mounting phase(shows the jsx in DOM)
    //this is also the third method of updating phase(shows the jsx in DOM)
    console.log("this is render method(3rd method)");
    return (
      <>
        <h1>Class Lifecycle Methods</h1>
        <h2>State Name: {this.state.name}</h2>
        <h3>Count : {this.state.count}</h3>
        <h2>Props Name:{this.props.name}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Change Count
        </button>
      </>
    );
  }
}

export default ClassLifecycle;
