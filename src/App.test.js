import { render, screen } from '@testing-library/react';
import WidthAlgorithm from './WidthAlgorithm';

test('renders learn react link', () => {
  render(<WidthAlgorithm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
