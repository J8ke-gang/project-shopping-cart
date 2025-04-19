// test/cart.test.jsx
import { render, screen } from '@testing-library/react';
import Cart from '../src/components/Cart';

test('renders cart component', () => {
  render(<Cart />);
  expect(screen.getByText(/cart/i)).toBeInTheDocument();
});
