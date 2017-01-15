import { Component } from 'react';

export default class ExampleComponent extends Component<{ sayHelloTo: string }, void> {
  render() {
    return (
      <h1>Hello, {this.props.sayHelloTo}</h1>
    );
  }
}