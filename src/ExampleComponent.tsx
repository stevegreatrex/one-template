import React, { Component } from 'react';

export default class ExampleComponent extends Component<{ sayHelloTo: string }, void> {
  render() {
    return (
      <h1 style={{
        textAlign: 'center',
        fontFamily: 'sans serif',
        marginTop: 100,
      }}>Hello, {this.props.sayHelloTo}</h1>
    );
  }
}