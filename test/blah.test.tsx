import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
  return <h1>TEST</h1>
}
 
describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
