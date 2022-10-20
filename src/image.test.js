import { render, screen } from '@testing-library/react';
import Image from './image';

describe('Logo', () => {
  test('Logo must have src = "/logo.svg" and alt = "Logo"', () => {
    render(<Image />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', '/logo.svg');
    expect(logo).toHaveAttribute('alt', 'Logo');
  });
});
