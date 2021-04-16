import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Season Movies text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Season Movies/i);
  expect(linkElement).toBeInTheDocument();
});
