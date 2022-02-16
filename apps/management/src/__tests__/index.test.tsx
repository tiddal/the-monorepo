import { render, screen } from '@testing-library/react';
import Home from 'pages';

describe('tests', () => {
  it('should say Hi from management', () => {
    render(<Home />);
    expect(screen.getByText('Hi from Management')).toBeInTheDocument();
  });
});
