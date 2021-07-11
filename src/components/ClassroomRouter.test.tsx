import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ClassroomRouter from './ClassroomRouter';


describe('ClassroomRouter', () => {
  it('renders a main element', () => {
    const { getByRole } = render(<ClassroomRouter />, { wrapper: MemoryRouter });
    const main = getByRole('main');
    expect(main).toBeInTheDocument();
  })
});
