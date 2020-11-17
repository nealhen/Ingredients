import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Ingredients list', () => {
  const { getByText } = render(
      <App />
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
