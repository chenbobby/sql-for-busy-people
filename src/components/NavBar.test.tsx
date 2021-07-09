import { render } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders a navigation element', () => {
    const { getByRole } = render(<NavBar />);
    const navBar = getByRole('navigation');
    expect(navBar).toBeInTheDocument();
  })
});
