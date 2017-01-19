import Example from 'Example';
const should = require('should');

describe('Example', () => {
  it('should be friendly', () => {
    const example = new Example();
    example.sayHello().should.equal('Hello, world');
  });
})