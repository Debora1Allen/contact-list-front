import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the form to add a person', () => {
  render(<App />);
  const formElement = screen.getByPlaceholderText(/Person Name/i);
  expect(formElement).toBeInTheDocument();
});

test('renders the button to submit form', () => {
  render(<App />);
  const submitButton = screen.getByText(/Submit/i);
  expect(submitButton).toBeInTheDocument();
});

