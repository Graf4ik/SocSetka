import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import SocSetkaApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocSetkaApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
