import { render, screen } from '@testing-library/react';
import App from './App';

test('renders professional description heading', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/masia/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
