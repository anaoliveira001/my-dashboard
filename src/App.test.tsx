import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Test case to check if the "L'oreal US" link is rendered in the App component.
 */
test('renders US link', () => {
  render(<App />);
  const linkElement = screen.getByText(/L'oreal US/i); //
  expect(linkElement).toBeInTheDocument();
});
