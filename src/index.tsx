import * as React from 'react';
import { render } from 'react-dom';
import ExampleComponent from 'ExampleComponent';

const rootElement = document.getElementById('my-app-root');
render(<ExampleComponent sayHelloTo="World" />, rootElement);