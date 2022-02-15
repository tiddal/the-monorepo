import { render, screen } from '@testing-library/react';
import Home from '.';

describe('tests', () => {
  it('should say Hi from commerce', () => {
    render(<Home />);
    expect(screen.getByText('Hi from Commerce')).toBeInTheDocument();
  });
});
