import { render } from '@testing-library/react';
import Classroom from './Classroom';

describe('Classroom', () => {
  it('renders a main element', () => {
    const { getByRole } = render(<Classroom />);
    const main = getByRole('main');
    expect(main).toBeInTheDocument();
  })
});
