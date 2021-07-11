import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import NavBar from './NavBar';


describe('NavBar', () => {
  it('renders a navigation element', () => {
    const { getByRole } = render(<NavBar />, { wrapper: MemoryRouter });
    const navBar = getByRole('navigation');
    expect(navBar).toBeInTheDocument();
  })
});
